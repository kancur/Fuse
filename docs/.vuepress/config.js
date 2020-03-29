const pckg = require('../../package.json')
const VERSION = process.env.VERSION || pckg.version
const GA_MEASUREMENT_ID = 'UA-82107035-1'

const extendsNetworks = {
  email: {
    sharer: 'mailto:?subject=@title&body=@url%0D%0A%0D%0A@description',
    type: 'direct',
    icon: '/email.png'
  },
  linkedin: {
    sharer:
      'https://www.linkedin.com/sharing/share-offsite/?mini=true&url=@url&title=@title&summary=@description',
    type: 'popup',
    color: '#1786b1',
    icon:
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>'
  }
}

module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Fuse.js',
      description: 'Lightweight fuzzy-search'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: `/icons/apple-touch-icon-152x152.png`
      }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ]
  ],
  plugins: [
    require('./plugins/google-analytics'),
    'vuepress-plugin-smooth-scroll',
    'vuepress-plugin-element-tabs',
    [
      'social-share',
      {
        networks: ['twitter', 'facebook', 'reddit', 'email', 'linkedin'],
        extendsNetworks,
        twitterUser: 'kirorisk',
        autoQuote: true,
        isPlain: false,
        noGlobalSocialShare: true
      }
    ]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'krisk/fuse',
    docsDir: 'docs',
    version: VERSION,
    GA_MEASUREMENT_ID,
    displayAllHeaders: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Guide', link: '/' },
          { text: 'Blog', link: '/blog/' },
          {
            text: 'Team',
            link: '/team/'
          },
          {
            text: 'Support Fuse.js',
            link: '/support/'
          },
          {
            text: 'Release Notes',
            link: 'https://github.com/krisk/Fuse/releases'
          }
        ],
        sidebar: {
          '/blog/': ['/blog/one'],
          '/': [
            {
              title: 'Getting Started',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/getting-started/installation',
                '/getting-started/different-builds'
              ]
            },
            '/demo',
            {
              title: 'API Reference',
              collapsable: false,
              children: ['/api/options', '/api/indexing']
            },
            '/examples'
          ]
        }
      }
    }
  }
}
