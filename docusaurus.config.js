// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Radxa Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.radxa.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    path: 'i18n',
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      zh: {
        htmlLang: 'zh-CN',
      }
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/footer.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: true,
        title: '',
        logo: {
          alt: 'Radxa',
          src: 'Logo.svg',
          width: 60,
          height: 18
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            position: 'left',
            label: 'Home',
            to: 'http://www.radxa.com/'
          },
          {
            position: 'left',
            label: 'News',
            to: 'http://www.radxa.com/news'
          },
          {
            position: 'left',
            label: 'About',
            to: 'http://www.radxa.com/about'
          },
          {
            position: 'left',
            label: 'Products',
            to: 'http://www.radxa.com/product'
          },
          {
            position: 'left',
            label: 'Support',
            to: 'http://www.radxa.com/docSearch '
          },
          {
            position: 'left',
            label: 'Community',
            to: 'http://www.radxa.com/association'
          },]
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Radxa',
            items: [
              {
                label: '首页',
                to: 'http://www.radxa.com/',
              },
              {
                label: '新闻',
                to: 'http://www.radxa.com/news',
              },
              {
                label: '关于我们',
                to: 'http://www.radxa.com/about',
              },
              {
                label: '产品',
                to: 'http://www.radxa.com/product',
              },
              {
                label: '支持',
                to: 'http://www.radxa.com/sustain',
              },
              {
                label: '社区',
                to: 'http://www.radxa.com/association',
              },
              // {
              //   label: '人才招聘',
              //   to: '/ability',
              // },
            ],
          },
          {
            title: '其他站点',
            items: [
              {
                label: 'Wiki',
                href: 'https://wiki.radxa.com/',
              },
              {
                label: 'Forum',
                href: 'https://forum.radxa.com/',
              },
              {
                label: 'Github',
                href: 'https://github.com/radxa',
              },
            ],
          },
          {
            title: '关于',
            items: [
              {
                label: '关于我们',
                to: 'http://www.radxa.com/about',
              },
              {
                label: '联系我们',
                to: 'http://www.radxa.com/about?contact_us',
              },
              {
                html: `
                   <div class='footer_box'>
                    <div class='footer_center'>
                        <div class='log'></div>
                        <div class='iconBox'>
                          <div class='men'>Follow Us</div>
                          <ul>
                            <li>
                              <a class='a_on1 iconpg' href='https://github.com/radxa'></a>
                            </li>
                            <li>
                              <a class='a_on2 iconpg' href='https://discord.com/invite/mn73YNWdHY'></a>
                            </li>
                            <li>
                              <a class='a_on3 iconpg' href='https://t.me/rockpi4'></a>
                            </li>
                            <li class='a_on4_li'>
                              <div class='a_on4 iconpg'></div>
                              <div class='vxMa'></div>
                            </li>
                            <li class='a_on5_li'>
                              <div class='a_on5 iconpg'></div>
                              <div class='qqMa'></div>
                            </li>
                          </ul>
                        </div>
                    </div>
                   </div>
                  `,
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
