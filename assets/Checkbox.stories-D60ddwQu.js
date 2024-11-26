import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{r as $,R as D}from"./index-DJO9vBfz.js";import{S as G}from"./StoryTemplate-BKeY88rQ.js";import{w as _,u as C}from"./index-DQvKtGYT.js";import{e as b}from"./index-DsMdyiDG.js";const t=({color:e="primary",checked:a,defaultChecked:c=!1,disabled:s=!1,id:m,indeterminate:o=!1,label:r,size:p="medium",value:H,onChange:k,...F})=>{const[M,N]=$.useState(c??!1),O=g=>{const V=g.target.checked;N(V),k&&k(g)};return console.log(k),n.jsxs("label",{className:[`storybook-font-${p}-${s?"disabled":"enabled"}`].join(" "),children:[n.jsx("input",{type:"checkbox",className:[`storybook-check-color-${e}`,o?`storybook-check-size-determinate-${p}`:`storybook-check-size-${p}`].join(" "),checked:o||(a??M),disabled:!!s,id:m||"",value:H||"",onChange:O}),n.jsx("span",{children:r})]})};t.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},checkedIcon:{required:!1,tsType:{name:"ReactNode"},description:""}}};const P=["primary","secondary","success","error","warning"],A=["small","medium","large"],X={title:"Components/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{},argTypes:{color:{description:"checkbox의 색상을 설정합니다.",control:{type:"select"}},size:{description:"checkbox의 크기를 설정합니다.",control:{type:"select"}}}},l={args:{label:"checkbox"},render:e=>{const a=()=>{console.log("onChange")};return n.jsx(t,{...e,onChange:a})},play:async({canvasElement:e})=>{const c=_(e).getByRole("checkbox",{name:"checkbox"});b(c).not.toBeChecked(),await C.click(c),b(c).toBeChecked(),await C.click(c),b(c).not.toBeChecked()}},d={render:()=>{const[e,a]=D.useState([!0,!1]),c=r=>{a([r.target.checked,r.target.checked])},s=r=>{a([r.target.checked,e[1]])},m=r=>{a([e[0],r.target.checked])},o=n.jsxs("div",{style:{marginLeft:"10px"},children:[n.jsx(t,{label:"Child 1",checked:e[0],onChange:s}),n.jsx(t,{label:"Child 2",checked:e[1],onChange:m})]});return n.jsxs("div",{children:[n.jsx(t,{label:"Parent",checked:e[0]&&e[1],indeterminate:e[0]!==e[1],onChange:c}),o]})}},i={render:()=>{const e=P.map(a=>n.jsx(t,{id:a,label:a,color:a,defaultChecked:!0}));return n.jsx(G,{items:e})}},h={render:()=>{const e=A.map(a=>n.jsx(t,{id:a,label:a,size:a,defaultChecked:!0}));return n.jsx(G,{items:e})}},u={render:()=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px",margin:"40px",alignItems:"center"},children:[n.jsx(t,{id:"checked-disabled",checked:!0,disabled:!0,label:"disabled"}),n.jsx(t,{id:"disabled",disabled:!0,label:"disabled"})]})};var x,f,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'checkbox'
  },
  render: args => {
    const handleClick = () => {
      console.log('onChange');
    };
    return <Checkbox {...args} onChange={handleClick} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1. 기본 checkbox 쿼리
    const checkbox = canvas.getByRole('checkbox', {
      name: 'checkbox'
    }); // 더 구체적인 접근 방식 사용

    // 2. 초기 상태 확인
    expect(checkbox).not.toBeChecked();

    // 3. checkbox 클릭하여 상태 변경
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // 4. checkbox 다시 클릭하여 상태 초기화
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  }
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,j,T;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState([true, false]);
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };
    const children = <div style={{
      marginLeft: '10px'
    }}>
        <Checkbox label="Child 1" checked={checked[0]} onChange={handleChange2} />
        <Checkbox label="Child 2" checked={checked[1]} onChange={handleChange3} />
      </div>;
    return <div>
        <Checkbox label="Parent" checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />
        {children}
      </div>;
  }
}`,...(T=(j=d.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var E,w,R;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = colorOptions.map(color => <Checkbox id={color} label={color} color={color} defaultChecked />);
    return <StoryTemplate items={colorGroup} />;
  }
}`,...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var S,I,q;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const sizeGroup = sizeOptions.map(size => <Checkbox id={size} label={size} size={size} defaultChecked />);
    return <StoryTemplate items={sizeGroup} />;
  }
}`,...(q=(I=h.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var z,B,L;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '40px',
      margin: '40px',
      alignItems: 'center'
    }}>
        <Checkbox id={'checked-disabled'} checked disabled label={'disabled'} />
        <Checkbox id={'disabled'} disabled label={'disabled'} />
      </div>;
  }
}`,...(L=(B=u.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const Y=["Default","Indeterminate","Color","Size","Disabled"];export{i as Color,l as Default,u as Disabled,d as Indeterminate,h as Size,Y as __namedExportsOrder,X as default};
