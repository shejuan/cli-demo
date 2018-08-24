import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import template from './jingli.vue'

@Component({
  name: 'jingli',
  mixins: [template]
})

export default class Jingli extends Vue {
  data = '经理页面的展示'
}