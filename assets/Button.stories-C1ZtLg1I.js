import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{T as A}from"./index-D8XHabch.js";import{S as o}from"./StoryTemplate-BKeY88rQ.js";import"./index-DJO9vBfz.js";const a=({color:t="primary",disabled:r=!1,href:n,label:K,loading:P=!1,size:v="medium",variant:l="filled",onClick:f,startIcon:g,endIcon:j,...Q})=>{const W=X=>{f&&f(X)},x=e.jsxs(e.Fragment,{children:[g&&e.jsx("span",{className:["storybook-icon-button-start"].join(" "),children:g}),e.jsx("span",{children:K}),j&&e.jsx("span",{className:["storybook-icon-button-end"].join(" "),children:j})]});return P?e.jsx("button",{type:"button",className:[`storybook-button-${v}`,`storybook-button-spin-${l}`].join(" "),disabled:!0,children:e.jsx("span",{className:[`loader-${l}`].join(" ")})}):n&&!r?e.jsx("a",{href:n,children:e.jsx("button",{type:"button",className:[`storybook-button-${v}`,`button-${l}-${t}`].join(" "),children:x})}):e.jsx("button",{type:"button",className:[`storybook-button-${v}`,`button-${l}-${t}`].join(" "),disabled:!!r,onClick:W,...Q,children:x})};a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const J=["primary","secondary","success","error","warning"],Y=["small","medium","large"],s=["filled","outlined","standard"],ae={title:"Components/Button",component:a,parameters:{layout:"centered"},tags:["autodocs","!dev"],args:{label:"Button"},argTypes:{label:{description:"button의 label을 설정합니다.",control:{required:!0}},color:{description:"button의 색상을 설정합니다.",control:{type:"select"}},disabled:{description:"값이 true일 경우, button이 비활성화 됩니다."},href:{description:"button이 눌렸을 때, 해당 URL로 이동합니다."},loading:{description:"값이 true일 경우, button이 로딩 상태로 변경 됩니다."},variant:{description:"button의 유형을 설정합니다.",control:{type:"select"}},size:{description:"button의 크기를 설정합니다.",control:{type:"select"}},startIcon:{description:"button의 label 앞에 Icon을 위치시킵니다."},endIcon:{description:"button의 label 뒤에 Icon을 위치시킵니다."},onClick:{description:"button이 눌렸을 때, onClick 이벤트를 설정합니다."}}},i={args:{label:"Button",onClick:()=>alert("IconButton clicked")}},c={render:()=>{const t=J.map(r=>e.jsx(a,{label:r,color:r,href:"https://www.naver.com"}));return e.jsx(o,{items:t})}},u={render:()=>{const t=s.map(r=>e.jsx(a,{label:"disabled",variant:r,disabled:!0}));return e.jsx(o,{items:t})}},d={render:()=>{const t=s.map(r=>e.jsx(a,{variant:r,loading:!0}));return e.jsx(o,{items:t})}},p={render:()=>{const t=J.map(r=>e.jsx(o,{items:s.map(n=>e.jsx(a,{label:n,variant:n,color:r}))},r));return e.jsx(e.Fragment,{children:t})}},m={render:()=>{const t=Y.map(r=>e.jsx(a,{label:r,color:"primary",variant:"filled",size:r}));return e.jsx(o,{items:t})}},b={render:()=>{const t=s.map(r=>e.jsx(a,{label:"Delete",color:"primary",variant:r,disabled:!0,startIcon:e.jsx(A,{size:16})}));return e.jsx(o,{items:t})}},y={render:()=>{const t=s.map(r=>e.jsx(a,{label:"Delete",color:"secondary",variant:r,endIcon:e.jsx(A,{size:16})}));return e.jsx(o,{items:t})}};var T,I,G;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    onClick: () => alert('IconButton clicked')
  }
}`,...(G=(I=i.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var S,h,B;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <Button label={color} color={color} href='https://www.naver.com' />);
    return <StoryTemplate items={colorGroup} />;
  }
}`,...(B=(h=c.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var k,w,z;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const variantGroup = variantOptions.map(variant => <Button label="disabled" variant={variant} disabled />);
    return <StoryTemplate items={variantGroup} />;
  }
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var O,q,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const loadingGroup = variantOptions.map(variant => <Button variant={variant} loading />);
    return <StoryTemplate items={loadingGroup} />;
  }
}`,...(C=(q=d.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var E,N,$;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <StoryTemplate key={color} items={variantOptions.map(variant => <Button label={variant} variant={variant} color={color} />)} />);
    return <>{colorGroup}</>;
  }
}`,...($=(N=p.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var D,R,V;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const sizeGroup = sizeOptions.map(size => <Button label={size} color="primary" variant="filled" size={size} />);
    return <StoryTemplate items={sizeGroup} />;
  }
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var L,M,_;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const IconGroup = variantOptions.map(variant => <Button label="Delete" color="primary" variant={variant} disabled startIcon={<TrashIcon size={16} />} />);
    return <StoryTemplate items={IconGroup} />;
  }
}`,...(_=(M=b.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var H,F,U;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const IconGroup = variantOptions.map(variant => <Button label="Delete" color="secondary" variant={variant} endIcon={<TrashIcon size={16} />} />);
    return <StoryTemplate items={IconGroup} />;
  }
}`,...(U=(F=y.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};const oe=["Default","Color","Disable","Loading","Variant","Size","StartIcon","EndIcon"];export{c as Color,i as Default,u as Disable,y as EndIcon,d as Loading,m as Size,b as StartIcon,p as Variant,oe as __namedExportsOrder,ae as default};
