
## 11. Dominica design runs (2026-09-30 to 2026-10-02): status and lessons learnt

Design runs for Scott's Head SH0080 (S01 to S07), Portsmouth 0+150, Portsmouth SD1 and SD2
(Indian River docks) and Pottersville 0+035, 600 s JONSWAP, SWL +0.78 m MSL (primary) and
+1.48 m MSL (check). Everything lives under `C:\IH2VOF\CASES\Dominica_design_runs\` with one
numbered subfolder per stage and a copy of its script in each:

| Folder | What is in it |
|---|---|
| `01_design_conditions` | wave conditions per site (DHI point, Hm0, Tp, paddle depth) |
| `02_geometry` | original closed-wall geometry (.DAT) + `cases.json` (25 cases) |
| `02b_geometry_basin` | `build_design_basin.py`: 13 cases with a dry overtopping basin landward of the lip (`_basin`) |
| `02c_geometry_flooded_end` | `build_design_flooded.py`: 4 cases +1.48 m with a flooded end and right absorption (`_flood`) |
| `02d_gui_prep` | `prep_case.py CASE`: copies the wave series into `<case>\_src` and writes `case_config.json` |
| `03_run` | first batch (15 cases at +0.78 m, closed wall), `RUN_DOMINICA_DESIGN.bat`, results\report.html |
| `03b_run_basin` | second batch (21 cases), `RUN_DOMINICA_BASIN.bat`, `IH2VOF_run_everything.py`, `gui_post.py` |
| `04_hq_videos` | `render_hq.py` (HQ MP4 per case), `compose_hq.py` (plan + drawing, run-up layouts), `drawings\` (georeferenced PDF sections) |

**First batch (+0.78 m, closed landward wall): 15 cases finished 2026-10-01, no failures.** Their
Hm0 at G1 to G5 and the near-bed velocity are usable. Q_G6, R2% and the G6 level are contaminated
at Scott's Head, Portsmouth 0+150 and Pottersville by the closed right wall (overtopped water ponds
and reflects: onshore and offshore flux past G6 cancel). SD1/SD2 use right absorption and are valid.
Portsmouth 0+150 proposed is not affected (no water reaches the wall).

**Second batch (started 2026-10-01 20:37 local):** 13 `_basin` + 4 `_flood` + 4 SD1/SD2 at +1.48 m,
3 at a time, raw output KEPT (no --cleanup). About 34 to 36 h in total: Scott's Head and Portsmouth
0+150 take about 5.5 h each, Pottersville 4.5 h, SD1/SD2 2.5 h, when three run together.

**Dock pressures.** Only the SD1/SD2 *proposed* cases have a pressure zone (the dock is only in the
proposed sections). At +0.78 m: SD1 FH max 18.9 kN/m, FV (uplift) 28.3 kN/m, MH 16.1, MV 35.3 kN m/m;
SD2 FH max 62.4 kN/m (wall embedded in the armour, no underside cells). Dynamic (wave) part only.

### Lessons learnt

1. **Closed landward wall (kr = 1) spoils overtopping and run-up** wherever water reaches it. Give
   the geometry a dry basin landward of the lip, or, where the land is below SWL, a flooded end
   with right absorption (kr = 3). Decide this before the first batch, not after.
2. **Switch on the pressure zone and run-up zone in the GUI before running** if you want the GUI's
   Pressure Analysis or Run-up Analysis later; they cannot be added after the run. None of the
   design cases has a run-up zone, so the GUI run-up tool cannot be used on them; the runner's
   own R2% (highest wet cell landward of `runup_from`) is used instead, and at Scott's Head the
   land is overtopped so that is not a bounded run-up.
3. **The runner deletes raw output (filesVof, filesU) about 5 min after a case finishes when
   `--cleanup` is set.** HQ videos need it. Either hardlink it into `<case>\raw_keep\` while the
   case runs, or run without `--cleanup` (second batch) and delete later. Four HQ videos of the
   first batch were lost this way (S01 to S03, SD2 proposed).
4. **The IH2VOF GUI is a compiled MATLAB exe**; its post-processing cannot be imported or called.
   `gui_post.py` reproduces it from the sensor files and the runner calls it after every case:
   `post\wave_gauges.png`, `wave_spectra.png`, `overtopping.png` (+csv), `pressure.png`
   (+csv) and `gui_metrics.json`; the report gets GUI overtopping, FH max and FV max columns and
   figure links. Pressure forces and moments match the GUI exactly (0.7 s moving average, dynamic
   = total minus the t = 0 hydrostatic field, trapezoid integral over the face cells from the base
   up, moments about the base and the seaward bottom corner). Overtopping thickness and velocity
   match in 96 % of samples; volumes are about 10 % higher than the GUI because the flux is
   integrated cell by cell and restart duplicates are dropped.
5. **Sensor files repeat the first seconds after an IH2VOF restart** (S01 repeats 0 to 40 s). Drop
   the duplicated time segment before integrating; the GUI counts it twice.
6. **The DAT geometry file's y axis points down**: y_model = H minus y_dat, with H the first number
   in the file. The last polygon named "Water" is not a solid.
7. **vchgt in the solver log reaches about minus 50 to minus 120 % in every case.** With active
   absorption it counts boundary fluxes, not mass error. The real water volume (from the VOF
   frames) drifts by less than 6 %. Do not treat vchgt as a failure; the report still marks it red.
8. **GUI automation:** typing a full path into the file dialog works for Import geometry, but the
   "Select a wave serie folder" dialog refuses typed paths: double-click into `_src` and click the
   folder. New case names are typed through the clipboard. The gauge list is added one value at a
   time (field, Add gauge). The GUI is a MATLAB app, so wait 4 to 15 s after mesh, import and
   paddle actions. The Windows text-input host and the Claude desktop window sometimes sit in front
   of the GUI: bring the GUI forward again (open_application) and retry.
9. **The shell on the computer stops responding after about 45 min of heavy use** (5 failures in a
   row, then wedged). Restarting the Claude desktop app fixes it; the batch keeps running. File
   listing and copying still work meanwhile, so read the log by copying it.
10. **Never run two batches at once**; the runner queues every case once (`seen` set) and never
    rescans. Renaming a case folder to `<case>__on_hold` makes the runner skip it cleanly
    ([ERROR] cannot start, no retry).
11. **Scheduled check-ins at most 3 h apart**; estimate finish times from the status lines and plan
    raw-output backups 5 min after [FINISHED], because runs finish about 5 min earlier than the
    runner's estimate.
12. **Ask before touching anything outside the project** (system apps, deletions, the GUI install).
    When something blocks the work, ask straight away rather than waiting for the next check-in:
    waiting cost an afternoon of idle compute on 2026-10-01.
