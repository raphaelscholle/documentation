// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Radxa Docs',
  tagline: 'Documentations for Radxa products',
  url: 'https://docs.radxa.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'radxa-docs', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

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
            'https://github.com/radxa-docs/documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/radxa-docs/documentation/edit/main/',
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
        logo: {
          alt: 'Radxa',
          src: 'logo.svg',
          width: 90,
          height: 20,
        },
        items: [
          {
            type: 'doc',
            label: 'Welcome',
            docId: 'welcome',
          },
          {
            position: 'right',
            label: 'Home',
            to: 'http://www.radxa.com/'
          },
          {
            position: 'right',
            label: 'News',
            to: 'http://www.radxa.com/news'
          },
          {
            position: 'right',
            label: 'About',
            to: 'http://www.radxa.com/about'
          },
          {
            position: 'right',
            label: 'Products',
            to: 'http://www.radxa.com/product'
          },
          {
            position: 'right',
            label: 'Support',
            to: 'http://www.radxa.com/docSearch '
          },
          {
            position: 'right',
            label: 'Community',
            to: 'http://www.radxa.com/association'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },]
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Radxa',
            items: [
              {
                label: 'Home',
                to: 'http://www.radxa.com/',
              },
              {
                label: 'News',
                to: 'http://www.radxa.com/news',
              },
              {
                label: 'About',
                to: 'http://www.radxa.com/about',
              },
              {
                label: 'Products',
                to: 'http://www.radxa.com/product',
              },
              {
                label: 'Support',
                to: 'http://www.radxa.com/sustain',
              },
              {
                label: 'Community',
                to: 'http://www.radxa.com/association',
              },
              // {
              //   label: 'Join Radxa',
              //   to: '/ability',
              // },
            ],
          },
          {
            title: 'Support',
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
            title: 'About',
            items: [
              {
                label: 'About Radxa',
                to: 'http://www.radxa.com/about',
              },
              {
                label: 'Contact Radxa',
                to: 'http://www.radxa.com/about?contact_us',
              },
              {
                html: `
                   <div class='footer_box'>
                    <div class='footer_center'>
                        <div class='log'></div>
                        <div class='iconBox'>
                          <div class='men'>Follow us</div>
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
