

import React from 'react'
import universal, { setHasBabelPlugin } from '/mnt/d/workspace/work/otm-dispatch/static-site/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js'), universalOptions)
      t_0.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js'
      
const t_1 = universal(import('/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/careers.js'), universalOptions)
      t_1.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/careers.js'
      
const t_2 = universal(import('/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js'), universalOptions)
      t_2.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js'
      
const t_3 = universal(import('/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js'), universalOptions)
      t_3.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js'
      
const t_4 = universal(import('/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/dashboard.js'), universalOptions)
      t_4.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/dashboard.js'
      
const t_5 = universal(import('/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js'), universalOptions)
      t_5.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js'
      
const t_6 = universal(import('/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js'), universalOptions)
      t_6.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js'
      
const t_7 = universal(import('/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/login.js'), universalOptions)
      t_7.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/login.js'
      
const t_8 = universal(import('/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js'), universalOptions)
      t_8.template = '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js'
      

// Template Map
export default {
  '/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js': t_0,
'/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/careers.js': t_1,
'/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/company.js': t_2,
'/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/contact.js': t_3,
'/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/dashboard.js': t_4,
'/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/help.js': t_5,
'/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/index.js': t_6,
'/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/login.js': t_7,
'/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/solutions.js': t_8
}
// Not Found Template
export const notFoundTemplate = "/mnt/d/workspace/work/otm-dispatch/static-site/src/pages/404.js"

