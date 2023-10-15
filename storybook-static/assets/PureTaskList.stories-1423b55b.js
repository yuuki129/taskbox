import{P as L}from"./PureTaskList-d62c750c.js";import{Default as s,actionsData as y}from"./Task.stories-634b413a.js";import"./Task-60aef36f.js";import"./vue.esm-bundler-6add88c9.js";import"./chunk-KKE3V3AL-49257385.js";import"./_commonjsHelpers-87174ba5.js";const x={component:L,title:"PureTaskList",decorators:[()=>({template:'<div style="margin: 3em;"><story/></div>'})],argTypes:{onPinTask:{},onArchiveTask:{}}},n=(b,{argTypes:D})=>({components:{PureTaskList:L},setup(){return{args:b,...y}},template:'<PureTaskList v-bind="args" />'}),a=n.bind({});a.args={tasks:[{...s.args.task,id:"1",title:"Task 1"},{...s.args.task,id:"2",title:"Task 2"},{...s.args.task,id:"3",title:"Task 3"},{...s.args.task,id:"4",title:"Task 4"},{...s.args.task,id:"5",title:"Task 5"},{...s.args.task,id:"6",title:"Task 6"}]};const t=n.bind({});t.args={tasks:[...a.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]};const e=n.bind({});e.args={tasks:[],loading:!0};const r=n.bind({});r.args={...e.args,loading:!1};var i,o,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  // eslint-disable-line
  components: {
    PureTaskList
  },
  setup() {
    return {
      args,
      ...TaskStories.actionsData
    };
  },
  template: '<PureTaskList v-bind="args" />'
})`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  // eslint-disable-line
  components: {
    PureTaskList
  },
  setup() {
    return {
      args,
      ...TaskStories.actionsData
    };
  },
  template: '<PureTaskList v-bind="args" />'
})`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,g,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  // eslint-disable-line
  components: {
    PureTaskList
  },
  setup() {
    return {
      args,
      ...TaskStories.actionsData
    };
  },
  template: '<PureTaskList v-bind="args" />'
})`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var k,T,P;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  // eslint-disable-line
  components: {
    PureTaskList
  },
  setup() {
    return {
      args,
      ...TaskStories.actionsData
    };
  },
  template: '<PureTaskList v-bind="args" />'
})`,...(P=(T=r.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const A=["Default","WithPinnedTasks","Loading","Empty"];export{a as Default,r as Empty,e as Loading,t as WithPinnedTasks,A as __namedExportsOrder,x as default};
//# sourceMappingURL=PureTaskList.stories-1423b55b.js.map
