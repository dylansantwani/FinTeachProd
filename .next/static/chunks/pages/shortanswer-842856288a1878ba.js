(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4394],{8663:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shortanswer",function(){return r(6652)}])},6652:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var s=r(5893),n=r(7294),c=r(5099),a=r(4843);function o(){let[e,t]=(0,n.useState)(0),[r,o]=(0,n.useState)(""),[l,i]=(0,n.useState)(0),[d,u]=(0,n.useState)(!1),[x,h]=(0,n.useState)(!1),m=[{prompt:"What is the capital of France?",correctAnswer:"Paris"},{prompt:"What is the largest planet in our solar system?",correctAnswer:"Jupiter"},{prompt:"What is the currency used in Japan?",correctAnswer:"Yen"},{prompt:"What is the tallest mountain in the world?",correctAnswer:"Mount Everest"}];return(0,s.jsx)("div",{className:"flex items-start justify-center min-h-screen bg-background mt-10",children:(0,s.jsx)("div",{className:"bg-background rounded-lg border p-6 w-full max-w-3xl",children:(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-2xl font-bold",children:"Text Input Quiz"}),(0,s.jsx)("p",{className:"text-muted-foreground",children:"Test your knowledge by typing your answers!"})]}),e<m.length?(0,s.jsxs)("div",{className:"grid gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-lg font-medium",children:m[e].prompt}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("input",{type:"text",className:"w-full p-2 border rounded-md ".concat(d?r.toLowerCase()===m[e].correctAnswer.toLowerCase()?"bg-green-100 border-green-500":"bg-red-100 border-red-500":""),value:r,onChange:e=>{x||o(e.target.value)},disabled:x,placeholder:"Type your answer here"}),d&&(0,s.jsx)("p",{className:"mt-2 ".concat(r.toLowerCase()===m[e].correctAnswer.toLowerCase()?"text-green-600":"text-red-600"),children:r.toLowerCase()===m[e].correctAnswer.toLowerCase()?"Correct!":"Incorrect. The correct answer is: ".concat(m[e].correctAnswer)})]})]}),(0,s.jsx)("div",{className:"flex justify-end gap-2",children:d?(0,s.jsx)(c.z,{onClick:()=>{u(!1),h(!1),o(""),t(e+1)},children:"Next Question"}):(0,s.jsx)(c.z,{onClick:()=>{""!==r.trim()&&(u(!0),h(!0),r.toLowerCase()===m[e].correctAnswer.toLowerCase()&&i(l+1))},children:"Submit"})})]}):(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold",children:"Quiz Complete!"}),(0,s.jsxs)("p",{className:"text-muted-foreground",children:["You scored ",l," out of ",m.length]})]}),e<m.length&&(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"text-muted-foreground",children:["Question ",e+1," of ",m.length]}),(0,s.jsx)(a.E,{value:e/m.length*100})]})]})})})}var l=r(1449);function i(){return(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)(o,{})})]})}}},function(e){e.O(0,[1664,3710,2888,9774,179],function(){return e(e.s=8663)}),_N_E=e.O()}]);