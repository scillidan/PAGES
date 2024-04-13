module.exports = {
  title: '𝕻𝕬𝕲𝕰𝕾',
  author: 'scillidan',
  language: 'zh',
  size: 'A5',
  theme: [
    // 'theme/gutenberg.css',
  ],
  entry: [
    // { 
    //   path: 'source/cover.md',
    //   title: '封面',
    //   theme: 'theme/_cover.css',
    // },
    // { 
    //   path: 'source/titlepage.md',
    //   title: '扉页',
    //   theme: 'theme/_titlepage.css',
    // },
    { 
      rel: 'contents',
      title: '目录',
      theme: 'theme/_toc.css',
    },
    // { 
    //   path: 'source/toc.md',
    //   title: '目录',
    //   theme: 'theme/_toc.css',
    // },
    { 
      path: 'source/你进到一家凋败的迷你影院.md',
      title: '你进到一家凋败的迷你影院',
      theme: 'theme/_page.css',
    },
    { 
      path: 'source/远近一家兼卖杂货的奶品店.md',
      title: '远近一家兼卖杂货的奶品店',
      theme: 'theme/_page.css',
    },
    { 
      path: 'source/最近他在调制龙舌兰、龙胆和雏菊的酒.md',
      title: '最近他在调制龙舌兰、龙胆和雏菊的酒',
      theme: 'theme/_poem.css',
    },
    { 
      path: 'source/提前到达了碰头地点.md',
      title: '提前到达了碰头地点',
      theme: 'theme/_page.css',
    },
    { 
      path: 'source/冷清霏霾.md',
      title: '冷清霏霾',
      theme: 'theme/_poem.css',
    },
    { 
      path: 'source/和煦风中，幅缘枝梢.md',
      title: '和煦风中，幅缘枝梢',
      theme: 'theme/_poem.css',
    },
  ],
  // output: [
    // './book.pdf',
    // './book.epub',
  // ],
  output: [
    './pages.pdf',
    {
      path: './epub',
      format: 'webpub',
    },
  ],
};