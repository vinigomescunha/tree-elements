var blogArticle = {
  tag: 'div', class: 'col-sm-3', childs: [
    {
      tag: 'div', class: 'thumbnail', childs: [
        { tag: 'img', attrs: { src: 'assets/images/item-article.png', alt: '' } },
        {
          tag: 'div', class: 'caption', childs: [
            { tag: 'h3', properties: { innerHTML: 'Lorem Ipsum' } },
            { tag: 'p', properties: { innerHTML: 'Lorem Ipsum dolor sit amet' } },
            {
              tag: 'p', childs: [
                { tag: 'a', class: 'btn btn-info', attrs: { href: '#products' }, properties: { innerHTML: 'Read More' } }
              ]
            }
          ]
        }
      ]
    }
  ]
};
var blog = {
  tag: 'section', class: 'blog', childs: [
    {
      tag: 'div', class: 'text-center page-header', childs: [
        { tag: 'h1', properties: { innerHTML: 'Blog' } },
        {
          tag: 'div', class: 'row', childs: [
            {
              tag: 'div', class: 'col-sm-6 col-sm-offset-3', childs: [
                { tag: 'p', properties: { innerHTML: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' } }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: 'div', class: 'container', childs: [
        blogArticle,
        blogArticle,
        blogArticle,
        blogArticle
      ]
    }
  ]
};
var welcomeTeam = {
  tag: 'section', class: 'time', childs: [
    {
      tag: 'div', class: 'text-center page-header', childs: [
        { tag: 'h1', properties: { innerHTML: 'Lorem Ipsum consectetur adipiscing' } },
        {
          tag: 'div', class: 'row', childs: [
            {
              tag: 'div', class: 'col-sm-6 col-sm-offset-3', childs: [
                { tag: 'p', properties: { innerHTML: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' } }
              ]
            }
          ]
        }
      ]
    }
  ]
};
var team = {
  tag: 'div', class: 'container', childs: [
    {
      tag: 'div', class: 'col-sm-4', childs: [
        {
          tag: 'div', class: 'thumbnail thumbnail-team', childs: [
            { tag: 'img', attrs: { src: 'assets/images/item-one.png', alt: '' } },
            { tag: 'span', class: 'label label-team label-primary', properties: { innerHTML: 'Label N' } },
            { tag: 'h3', class: 'text-center bg-primary', properties: { innerHTML: 'Lorem Ipsum' } }

          ]
        }]
    },
    {
      tag: 'div', class: 'col-sm-4', childs: [
        {
          tag: 'div', class: 'thumbnail thumbnail-team', childs: [
            { tag: 'img', attrs: { src: 'assets/images/item-two.png', alt: '' } },
            { tag: 'span', class: 'label label-team label-primary', properties: { innerHTML: 'Label N' } },
            { tag: 'h3', class: 'text-center bg-primary', properties: { innerHTML: 'Lorem Ipsum' } }

          ]
        }]
    },
    {
      tag: 'div', class: 'col-sm-4', childs: [
        {
          tag: 'div', class: 'thumbnail thumbnail-team', childs: [
            { tag: 'img', attrs: { src: 'assets/images/item-three.png', alt: '' } },
            { tag: 'span', class: 'label label-team label-primary', properties: { innerHTML: 'Label N' } },
            { tag: 'h3', class: 'text-center bg-primary', properties: { innerHTML: 'Lorem Ipsum' } }

          ]
        }]
    }
  ]
};
var navBar =
  {
    tag: 'nav', class: 'navbar-default header', attrs: { role: 'navigation' }, childs: [
      {
        tag: 'div', class: 'container', childs: [
          {
            tag: 'div', class: 'navbar-header', childs: [
              { tag: 'a', class: 'navbar-brand', attrs: { href: '#' }, properties: { innerHTML: 'Main Title' } }
            ]
          },
          {
            tag: 'div', class: 'collapse navbar-collapse navbar-ex1-collapse', childs: [
              {
                tag: 'ul', class: 'nav navbar-nav navbar-right', childs: [
                  { tag: 'li', childs: [{ tag: 'a', attrs: { href: '#services' }, properties: { innerHTML: 'Services' } }] },
                  { tag: 'li', childs: [{ tag: 'a', attrs: { href: '#products' }, properties: { innerHTML: 'Products' } }] },
                  { tag: 'li', childs: [{ tag: 'a', attrs: { href: '#aboutUs' }, properties: { innerHTML: 'About Us' } }] },
                  { tag: 'li', childs: [{ tag: 'a', attrs: { href: '#contactUs' }, properties: { innerHTML: 'Contact' } }] }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
var banner = {
  tag: 'div', class: 'jumbotron banner cover-bg', childs: [
    {
      tag: 'div', class: 'container', childs: [
        {
          tag: 'h1', properties: { innerHTML: 'Lorem Ipsum' }, childs: [
            { tag: 'p', properties: { innerHTML: 'Lorem Ipsum Dolor Sit Amet@banner-subtitle' } },
            {
              tag: 'p', childs: [
                { tag: 'a', id: 'more-info-banner', class: 'btn btn-primary btn-lg', attrs: { href: '#services' }, properties: { innerHTML: 'Learn more' } }
              ]
            }
          ]
        }
      ]
    }
  ]
};
var linkAboutUs = {
  tag: 'div', class: 'jumbotron cover-bg container', childs: [
    {
      tag: 'div', class: 'container text-center text-muted bg-info', childs: [
        {
          tag: 'h1', id: 'about-us-h1', properties: { innerHTML: 'About us' }, childs: [
            { tag: 'p', properties: { innerHTML: 'Lorem Ipsum Dolor Sit Amet Vestibulum vitae faucibus dolor, sed tempor nibh. Integer nec nulla sit amet risus ornare maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.' } },
          ]
        },
        { tag: 'div', class: 'container label-label label-danger', properties: {innerHTML: 'Nulla leo lorem, auctor ultrices magna ac, sollicitudin porttitor tortor.'}},
        {
          tag: 'small', class: 'text-center', properties: {
            innerHTML: '*Quisque feugiat convallis nisl, blandit vestibulum ipsum. '
          }, childs: [
            { tag: 'span', class: 'badge', attrs: { onClick: "console.info('120!');" }, properties: { innerHTML: '120 Entries'}},
            { tag: 'span', class: 'badge badge-success', attrs: { onClick: "console.info('100!');" },properties: { innerHTML: '100 Entries'}},
            { tag: 'span', class: 'badge badge-warning', attrs: { onClick: "console.info('90!');" }, properties: { innerHTML: '90 Entries'}},
            { tag: 'span', class: 'badge badge-error', attrs: { onClick: "console.info('60!');" }, properties: { innerHTML: '60 Entries'}},
            { tag: 'span', class: 'badge badge-info', attrs: { onClick: "console.info('40!');" }, properties: { innerHTML: '40 Entries'}},
            { tag: 'span', class: 'badge badge-inverse', attrs: { onClick: "console.info('20!');" }, properties: { innerHTML: '20 Entries'}},
            { tag: 'div', class: 'container label-label label-success', properties: {innerHTML: 'Nulla leo lorem, auctor ultrices magna ac, sollicitudin porttitor tortor.'}},
            { tag: 'h2', class: 'container text-primary', properties: {innerHTML: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla sed ex sed lobortis.'}},
            { tag: 'p', childs: [
              { tag: 'a', class: 'btn btn-primary btn-lg', attrs: { href: '#' }, properties: { innerHTML: 'Go To Home' } } ] }
          ]
        }
      ]
    }
  ]
};
var linkContactUs = {
  tag: 'div', class: 'jumbotron cover-bg container', childs: [
    {
      tag: 'div', class: 'container text-center text-muted bg-primary', childs: [
        { tag: 'h1', properties: { innerHTML: 'Contact us' }},
        {
          tag: 'p', class: 'text-center',childs: [
            { tag: 'form', childs: [
              {tag: 'div', class: 'form-group row', childs: [
                {tag: 'label', class: 'col-sm-2', attrs: {for: 'myemail'}, properties: { innerHTML: 'Email address'}},
                {tag: 'div', class: 'col-sm-10', childs: [
                  {tag: 'input', class: 'form-control', id: 'myemail', attrs: { type: 'email', placeholder: 'Enter Email'}, properties: { innerHTML: 'Email address'}}
                ]},
              ]},
              {tag: 'div', class: 'form-group row', childs: [
                {tag: 'label', class: 'col-sm-2',attrs: {for: 'mypass'}, properties: { innerHTML: 'Password'}},
                {tag: 'div', class: 'col-sm-10', childs: [
                  {tag: 'input', class: 'form-control', id: 'mypass', attrs: { type: 'password', placeholder: 'Enter Pass'}, properties: { innerHTML: 'Password'}}
                ]},
              ]},
              {tag: 'div', class: 'form-group row', childs: [
                {tag: 'input', id: 'mychk', attrs: { type: 'checkbox'}},
                {tag: 'label', attrs: {for: 'mychk'}, properties: { innerHTML: 'Check this option:'}},
              ]},
              {tag: 'div', class: 'form-group row', childs: [
                {tag: 'label', class: 'col-sm-2', attrs: {for: 'mysel'}, properties: { innerHTML: 'Select Option:'}},
                {tag: 'div', class: 'col-sm-10', childs: [
                  {tag: 'select', class: 'form-control', id: 'mysel', childs: [
                    { tag: 'option', properties: {innerHTML: 1}},
                    { tag: 'option', properties: {innerHTML: 2}},
                    { tag: 'option', properties: {innerHTML: 3}},
                  ]}
                ]}
              ]},
              {tag: 'div', class: 'form-group row', childs: [
                {tag: 'label', class: 'col-sm-2', attrs: {for: 'mytextarea'}, properties: { innerHTML: 'Fill Text:'}},   
                {tag: 'div', class: 'col-sm-10', childs: [            
                    {tag: 'textarea', class: 'form-control', id: 'mytextarea', attrs: {placeholder: 'Place text here...'}, properties: { cols: 102, rows: 4}}
                ]}
              ]},
              {tag: 'div', class: 'form-group row', childs: [
                {tag: 'div', class: 'col-sm-12', childs: [            
                    {tag: 'button', class: 'form-control', id: 'submit-btn', attrs: {type: 'submit', value: ''}, properties: { innerHTML: 'Contact us now!'}}
                ]}
              ]}
            ] }
          ]
        }
      ]
    }
  ]
};
var paragraphOne = {
  tag: 'div', class: 'container', childs: [
    welcomeTeam,
    team,
    blog
  ]
}
var linkProducts = {
  tag: 'div', class: 'container', childs: [
    blogArticle,
    blogArticle,
    blogArticle,
    blogArticle,
    blogArticle,
    blogArticle,
    blogArticle,
    blogArticle,
    blogArticle,
    blogArticle,
    blogArticle,
    blogArticle
  ]
};
var linkServices =  {
  tag: 'div', class: 'col-sm-12', childs: [
    {
      tag: 'div', class: 'thumbnail', childs: [
         {
          tag: 'div', class: 'caption', childs: [
            { tag: 'h1', properties: { innerHTML: 'Services - Lorem Ipsum' } },
            { tag: 'p', class: 'bg-danger', properties: { innerHTML: 'Lorem Ipsum dolor sit amet.. Quisque in orci vel magna consectetur dignissim quis eget nunc. Donec vel accumsan elit, in faucibus lacus. Phasellus eget eros sed mauris pellentesque tempor. Sed accumsan nunc vitae egestas mollis. Sed venenatis id ante sit amet cursus. Vestibulum non tellus congue, commodo felis fringilla, dictum est.' } },
            { tag: 'p', class: 'bg-primary',properties: { innerHTML: 'Lorem Ipsum Pellentesque maximus dictum massa, nec elementum dolor pretium ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ultrices sagittis enim, id faucibus lorem scelerisque a. Aenean quis lectus mauris. Donec sit amet lectus vitae dolor faucibus bibendum eget vehicula felis. In id sodales odio.' } },
            { tag: 'p', class: 'bg-warning',properties: { innerHTML: 'Sed quis volutpat dui. Duis dictum consectetur nisl, in feugiat tellus dignissim id. Suspendisse non urna et tortor convallis varius. Sed at est ipsum. Cras vitae dui tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vitae mi convallis, maximus nisi vel, posuere lacus. Vivamus leo augue, lacinia at lorem non, feugiat vulputate leo. Sed facilisis eu ex ac efficitur. Sed varius risus eu velit condimentum, ac vulputate quam vestibulum. Ut a tortor justo.' } },
            { tag: 'p', class: 'bg-info',properties: { innerHTML: 'Quisque justo lorem, cursus non ante sit amet, consequat ultrices odio. Phasellus semper nulla et nunc maximus, id ultrices tortor accumsan. Nunc sit amet quam efficitur, elementum neque a, sodales sem. Nunc odio nisl, ullamcorper ut mauris sed, faucibus malesuada ipsum. Vivamus venenatis eu leo quis tristique. Mauris arcu justo, condimentum vitae odio faucibus, cursus ultricies turpis. Mauris venenatis eleifend ligula id euismod. Aliquam erat volutpat.' } },
            { tag: 'p', class: 'bg-success',properties: { innerHTML: 'Suspendisse maximus velit nulla, nec bibendum tortor dapibus placerat. Praesent a accumsan leo. Vestibulum venenatis vel turpis sit amet posuere. Proin feugiat semper metus, id placerat arcu molestie id. Nunc cursus arcu eu mauris finibus egestas. Suspendisse potenti. Nulla eu enim sapien. Duis maximus porta ante et maximus. Fusce commodo est non fringilla varius.' } },
            { tag: 'p', properties: { innerHTML: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod posuere nunc ullamcorper dictum. Maecenas justo quam, dictum at odio non, egestas vestibulum odio. Proin cursus elit quis mauris hendrerit, dapibus placerat ex fermentum. Sed sem elit, blandit at malesuada condimentum, consectetur ut tortor. Pellentesque lobortis, enim sed convallis blandit, ante enim fringilla odio, quis dictum elit neque eu massa. ' } },
            {
              tag: 'p', childs: [
                { tag: 'a', class: 'btn btn-info', attrs: { href: '#notfound' }, properties: { innerHTML: 'More Info' } }
              ]
            }
          ]
        }
      ]
    }
  ]
};
var footer = {
  tag: 'footer', childs: [
    { tag: 'div', class: 'container text-center', properties: { innerHTML: 'My Footer' } }
  ]
}
// routes content
var routes = {
  banner,
  footer,
  navBar,
  paragraphOne,
  linkAboutUs,
  linkContactUs,
  linkProducts,
  linkServices
}
