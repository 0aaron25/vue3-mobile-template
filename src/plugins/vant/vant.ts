import type { App } from "vue"
type vantCompoents = {
  [key: string]: any
}
import {
  Icon,
  List,
  Toast,
  Search,
  Tabbar,
  TabbarItem,
  Button,
  Tab,
  Tabs,
  Col,
  Row,
  DropdownMenu,
  DropdownItem,
  TreeSelect,
  Image as VanImage,
  Lazyload,
  Empty,
  Cell,
  CellGroup,
  Popup,
  Picker,
  Divider,
  Pagination,
  Field,
  Collapse,
  CollapseItem,
  Form,
  DatetimePicker,
  Loading,
  Overlay,
  ConfigProvider,
} from "vant"

const components: vantCompoents = {
  Icon,
  ConfigProvider,
  List,
  Toast,
  Search,
  Tabbar,
  TabbarItem,
  Button,
  Tab,
  Tabs,
  Col,
  Row,
  DropdownMenu,
  DropdownItem,
  TreeSelect,
  VanImage,
  Lazyload,
  Empty,
  Cell,
  CellGroup,
  Popup,
  Picker,
  Divider,
  Pagination,
  Field,
  Collapse,
  CollapseItem,
  Form,
  DatetimePicker,
  Loading,
  Overlay,
}
const componentsHandler = {
  install(app: App<Element>) {
    Object.keys(components).forEach((key) => app.use(components[key]))
  },
}

export default componentsHandler
