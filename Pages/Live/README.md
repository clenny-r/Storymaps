# Live

This folder powers the **Live Worship Stream** page for TWC Ministries — the primary destination for members and visitors watching Sabbath services online.

**Live URL:** [twcministries.net/Pages/Live/Live.html](https://www.twcministries.net/Pages/Live/Live.html)

## Files

| File | Description |
|---|---|
| `Live.html` | Main live stream page (canonical URL shared on social media) |
| `index.html` | Redirect/alias to `Live.html` |

## How It Works

The live stream is embedded via an iframe (YouTube or similar platform). To update the stream link, edit the embed URL inside `Live.html`.

## Open Graph / Social Sharing

`Live.html` includes Open Graph meta tags so that when the link is shared on WhatsApp, Facebook, or other platforms, it shows the church logo and a description. Update these tags if the stream description changes:

```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```
