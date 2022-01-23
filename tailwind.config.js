const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      '**/*.vue'
    ],
    options: {
      // Whitelisting some classes to avoid purge
      safelist: ['bg-destinations-mobile']
    }
  },
  theme: {
    extend: {
      backgroundImage: {
        // Home
        'home-mobile': 'url(~assets/home/background-home-mobile.jpg)',
        'home-tablet': 'url(~assets/home/background-home-tablet.jpg)',
        'home-desktop': 'url(~assets/home/background-home-desktop.jpg)',
        // Destination
        'destinations-mobile':
          'url(~assets/destination/background-destination-mobile.jpg)',
        'destinations-tablet':
          'url(~assets/destination/background-destination-tablet.jpg)',
        'destinations-desktop':
          'url(~assets/destination/background-destination-desktop.jpg)',
        // Crew
        'crew-mobile': 'url(~assets/crew/background-crew-mobile.jpg)',
        'crew-tablet': 'url(~assets/crew/background-crew-tablet.jpg)',
        'crew-desktop': 'url(~assets/crew/background-crew-desktop.jpg)',
        // Technology
        'technology-mobile':
          'url(~assets/technology/background-technology-mobile.jpg)',
        'technology-tablet':
          'url(~assets/technology/background-technology-tablet.jpg)',
        'technology-desktop':
          'url(~assets/technology/background-technology-desktop.jpg)',
      },
      colors: {
        dark: "hsl(230, 35%, 7%)",
        'light-blue': "hsl(231, 77%, 90%)",
        light: "hsl(0, 0%, 100%)"
      },
      ringColor: {
        'light-blue': "hsl(231, 77%, 90%)",
      },
      ringWidth: {
        lg: '25px'
      },
      ringOpacity: {
        '100': '1',
       },
      fontFamily: {
        bellefair: ['bellefair', 'regular'],
        'barlow-con': ['barlow', 'condensed'],
        'barlow-reg': ['barlow', 'regular']
      },
      fontSize: {
        lg: ['80px'],
      }
    },

  },
  variants: {
    extend:{
      borderWidth: ['hover', 'focus'],
      borderColor: ['focus', 'hover'],
      ringWidth: ['hover', 'active'],
      ringOpacity: ['hover', 'active'],
    }
    
  },
  corePlugins: {
    // ...
   ringOpacity: false,
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',

          params: 'url-prefix()',
        })

        isFirefoxRule.append(container.nodes)

        container.append(isFirefoxRule)

        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`
        })
      })
    }),
  ],
}
