# PAGES

- [html](https://scillidan.github.io/PAGES/)
- [pdf](https://scillidan.github.io/PAGES/pages.pdf)
- [epub](https://scillidan.github.io/PAGES/epub)

## How to make

```sh
mkdir pages
cd pages
pnpm add -g @vivliostyle/cli
vivliostyle init
```

Edit `vivliostyle.config.js` by yourself.

You can refer to `.css` files of [vivliostyle_doc/samples](https://github.com/vivliostyle/vivliostyle_doc/tree/gh-pages/samples), [kaigainotabi1](https://github.com/MurakamiShinyu/kaigainotabi1), etc. to create your `style.css`.

Live preview `html`:

```sh
vivliostyle preview
```

I don't know why, but sometimes after you use "vivliostyle preview", you need to find and stop the (multi-) `chromium` process. Used `Task Manager`, etc..

Build on local:

```sh
vivliostyle build
```

Or Create a `workflow.yml` liked [./github/workflows/action.yml](action.yml) to build it on cloud.

Open [Vivliostyle Viewer](https://vivliostyle.org/viewer/). Or refer to [vivliostyle-viewer.md](https://github.com/scillidan/PM2-demo/blob/main/_readme/vivliostyle-viewer.md) to host it on local.

Input your `gh-pages` URL, liked `https://scillidan.github.io/PAGES/`.

With [options](https://docs.vivliostyle.org/#/vivliostyle-viewer#url-parameter-options), liked `https://scillidan.github.io/PAGES/&style=data:,@page{size:a5;}&zoom=1`