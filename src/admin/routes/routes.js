import config from '../config'
import AdminLayout from '../layout/AdminLayout'
import Home from '../pages/Home'

const adminRoutes = [
  {
    path: config.routes.admin,
    component: Home,
    layout: AdminLayout
  }
]

export { adminRoutes }