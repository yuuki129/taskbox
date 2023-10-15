import{T as u}from"./Task-60aef36f.js";import{a as e}from"./chunk-KKE3V3AL-49257385.js";import"./vue.esm-bundler-6add88c9.js";import"./_commonjsHelpers-87174ba5.js";const S={component:u,excludeStories:/.*Data$/,title:"Task",argTypes:{onPinTask:{},onArchiveTask:{}}},l={onPinTask:e("pin-task"),onArchiveTask:e("archive-task")},t=g=>({components:{Task:u},setup(){return{args:g,...l}},template:'<Task v-bind="args" />'}),a=t.bind({});a.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX"}};const s=t.bind({});s.args={task:{...a.args.task,state:"TASK_PINNED"}};const n=t.bind({});n.args={task:{...a.args.task,state:"TASK_ARCHIVED"}};var r,o,c;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    Task
  },
  setup() {
    return {
      args,
      ...actionsData
    };
  },
  template: '<Task v-bind="args" />'
})`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,p,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Task
  },
  setup() {
    return {
      args,
      ...actionsData
    };
  },
  template: '<Task v-bind="args" />'
})`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,k,T;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Task
  },
  setup() {
    return {
      args,
      ...actionsData
    };
  },
  template: '<Task v-bind="args" />'
})`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const _=["actionsData","Default","Pinned","Archived"];export{n as Archived,a as Default,s as Pinned,_ as __namedExportsOrder,l as actionsData,S as default};
//# sourceMappingURL=Task.stories-634b413a.js.map
