import { mount } from '~/leste'
import component from './01_component/index.js'
import reactivity from './02_reactivity/index.js'
import component_communication from './03_component_communication/index.js'
import styles from './04_styles/index.js'
import list from './05_list/index.js'
import dynamic_component from './06_dynamic_component/index.js'
import component_integration from './07_component_integration/index.js'
import iterable_components from './08_iterable_components/index.js'

const root = document.querySelector('#root')
mount(root, iterable_components)
// leste.mount(root, iterable_components )