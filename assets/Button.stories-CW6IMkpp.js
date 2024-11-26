import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as Z}from"./index-DJO9vBfz.js";import{T as K}from"./index-D8XHabch.js";import{S as o}from"./StoryTemplate-BKeY88rQ.js";import{w as ee,u as te}from"./index-DQvKtGYT.js";import{e as T}from"./index-DsMdyiDG.js";const a=({color:n="primary",disabled:t=!1,href:r,label:y,loading:Q=!1,size:f="medium",variant:l="filled",onClick:g,startIcon:j,endIcon:x,...W})=>{const X=Y=>{g&&g(Y)},k=e.jsxs(e.Fragment,{children:[j&&e.jsx("span",{className:["storybook-icon-button-start"].join(" "),children:j}),e.jsx("span",{children:y}),x&&e.jsx("span",{className:["storybook-icon-button-end"].join(" "),children:x})]});return Q?e.jsx("button",{type:"button",className:[`storybook-button-${f}`,`storybook-button-spin-${l}`].join(" "),disabled:!0,children:e.jsx("span",{className:[`loader-${l}`].join(" ")})}):r&&!t?e.jsx("a",{href:r,children:e.jsx("button",{type:"button",className:[`storybook-button-${f}`,`button-${l}-${n}`].join(" "),children:k})}):e.jsx("button",{type:"button",className:[`storybook-button-${f}`,`button-${l}-${n}`].join(" "),disabled:!!t,onClick:X,...W,children:k})};a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const P=["primary","secondary","success","error","warning"],ne=["small","medium","large"],s=["filled","outlined","standard"],ce={title:"Components/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Button"},argTypes:{label:{description:"button의 label을 설정합니다.",control:{required:!0}},color:{description:"button의 색상을 설정합니다.",control:{type:"select"}},disabled:{description:"값이 true일 경우, button이 비활성화 됩니다."},href:{description:"button이 눌렸을 때, 해당 URL로 이동합니다."},loading:{description:"값이 true일 경우, button이 로딩 상태로 변경 됩니다."},variant:{description:"button의 유형을 설정합니다.",control:{type:"select"}},size:{description:"button의 크기를 설정합니다.",control:{type:"select"}},startIcon:{description:"button의 label 앞에 Icon을 위치시킵니다."},endIcon:{description:"button의 label 뒤에 Icon을 위치시킵니다."},onClick:{description:"button이 눌렸을 때, onClick 이벤트를 설정합니다."}}},i={args:{label:"Button",variant:"filled"},render:n=>{const[t,r]=Z.useState(!1),y=()=>{r(!t)};return e.jsx(a,{...n,onClick:y,variant:t?"outlined":n.variant})},play:async({canvasElement:n})=>{const r=ee(n).getByRole("button",{name:"Button"});await T(r).toHaveClass("button-filled-primary"),await te.click(r),await T(r).toHaveClass("button-outlined-primary")}},c={render:()=>{const n=P.map(t=>e.jsx(a,{label:t,color:t,href:"https://www.naver.com"}));return e.jsx(o,{items:n})}},u={render:()=>{const n=s.map(t=>e.jsx(a,{label:"disabled",variant:t,disabled:!0}));return e.jsx(o,{items:n})}},d={render:()=>{const n=s.map(t=>e.jsx(a,{variant:t,loading:!0}));return e.jsx(o,{items:n})}},p={render:()=>{const n=P.map(t=>e.jsx(o,{items:s.map(r=>e.jsx(a,{label:r,variant:r,color:t}))},t));return e.jsx(e.Fragment,{children:n})}},m={render:()=>{const n=ne.map(t=>e.jsx(a,{label:t,color:"primary",variant:"filled",size:t}));return e.jsx(o,{items:n})}},b={render:()=>{const n=s.map(t=>e.jsx(a,{label:"Delete",color:"primary",variant:t,disabled:!0,startIcon:e.jsx(K,{size:16})}));return e.jsx(o,{items:n})}},v={render:()=>{const n=s.map(t=>e.jsx(a,{label:"Delete",color:"secondary",variant:t,endIcon:e.jsx(K,{size:16})}));return e.jsx(o,{items:n})}};var h,w,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'filled'
    // onClick: () => alert('IconButton clicked'),
  },
  render: args => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
      setClick(!click);
    };
    return <Button {...args} onClick={handleClick} variant={click ? 'outlined' : args.variant} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Button'
    }); // 더 구체적인 접근 방식 사용

    // 클릭 전에 클래스가 올바른지 확인
    await expect(button).toHaveClass(\`button-filled-primary\`);

    // 버튼 클릭
    await userEvent.click(button);

    // 클릭 후 클래스 변경 확인
    await expect(button).toHaveClass(\`button-outlined-primary\`);
  }
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var S,B,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <Button label={color} color={color} href='https://www.naver.com' />);
    return <StoryTemplate items={colorGroup} />;
  }
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var G,E,z;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const variantGroup = variantOptions.map(variant => <Button label="disabled" variant={variant} disabled />);
    return <StoryTemplate items={variantGroup} />;
  }
}`,...(z=(E=u.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var O,q,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const loadingGroup = variantOptions.map(variant => <Button variant={variant} loading />);
    return <StoryTemplate items={loadingGroup} />;
  }
}`,...(N=(q=d.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var R,$,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <StoryTemplate key={color} items={variantOptions.map(variant => <Button label={variant} variant={variant} color={color} />)} />);
    return <>{colorGroup}</>;
  }
}`,...(D=($=p.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var H,V,L;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const sizeGroup = sizeOptions.map(size => <Button label={size} color="primary" variant="filled" size={size} />);
    return <StoryTemplate items={sizeGroup} />;
  }
}`,...(L=(V=m.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var M,_,F;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const IconGroup = variantOptions.map(variant => <Button label="Delete" color="primary" variant={variant} disabled startIcon={<TrashIcon size={16} />} />);
    return <StoryTemplate items={IconGroup} />;
  }
}`,...(F=(_=b.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var U,A,J;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const IconGroup = variantOptions.map(variant => <Button label="Delete" color="secondary" variant={variant} endIcon={<TrashIcon size={16} />} />);
    return <StoryTemplate items={IconGroup} />;
  }
}`,...(J=(A=v.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};const ue=["Default","Color","Disable","Loading","Variant","Size","StartIcon","EndIcon"];export{c as Color,i as Default,u as Disable,v as EndIcon,d as Loading,m as Size,b as StartIcon,p as Variant,ue as __namedExportsOrder,ce as default};
