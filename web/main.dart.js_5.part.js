self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
azA(d,e,f){var x,w,v,u,t,s,r=e.b
if(r<=0||e.a<=0||f.b<=0||f.a<=0)return C.N8
switch(d.a){case 0:x=f
w=e
break
case 1:v=f.a
u=f.b
t=e.a
x=v/u>t/r?new A.S(t*u/r,u):new A.S(v,r*v/t)
w=e
break
case 2:v=f.a
u=f.b
t=e.a
w=v/u>t/r?new A.S(t,t*u/v):new A.S(r*v/u,r)
x=f
break
case 3:r=e.a
v=f.a
u=r*f.b/v
w=new A.S(r,u)
x=new A.S(v,u*v/r)
break
case 4:v=f.b
u=r*f.a/v
w=new A.S(u,r)
x=new A.S(u*v/r,v)
break
case 5:w=new A.S(Math.min(e.a,f.a),Math.min(r,f.b))
x=w
break
case 6:s=e.a/r
v=f.b
x=r>v?new A.S(v*s,v):e
r=f.a
if(x.a>r)x=new A.S(r,r/s)
w=e
break
default:w=null
x=null}return new B.Kh(w,x)},
qq:function qq(d,e){this.a=d
this.b=e},
Kh:function Kh(d,e){this.a=d
this.b=e},
aA9(d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b1.gW(b1))return
x=b1.a
w=b1.c-x
v=b1.b
u=b1.d-v
t=new A.S(w,u)
s=a7.gce(a7)
r=a7.gd_(a7)
if(a5==null)a5=C.eg
q=B.azA(a5,new A.S(s,r).dW(0,b3),t)
p=q.a.R(0,b3)
o=q.b
if(b2!==C.aY&&o.k(0,t))b2=C.aY
n=A.aT()
n.szT(!1)
if(a2!=null)n.sta(a2)
n.sa_(0,B.a_k(0,0,0,b0))
n.smJ(a4)
n.szP(a8)
m=o.a
l=(w-m)/2
k=o.b
j=(u-k)/2
u=d.a
u=x+(l+(a6?-u:u)*l)
v+=j+d.b*j
i=new A.E(u,v,u+m,v+k)
h=b2!==C.aY||a6
if(h)a0.b8(0)
v=b2===C.aY
if(!v)a0.mk(0,b1)
if(a6){g=-(x+w/2)
a0.aX(0,-g,0)
a0.dX(0,-1,1)
a0.aX(0,g,0)}f=d.zM(p,new A.E(0,0,s,r))
if(v)a0.mw(a7,f,i,n)
else for(x=B.aNh(b1,i,b2),w=x.length,e=0;e<x.length;x.length===w||(0,A.T)(x),++e)a0.mw(a7,f,x[e],n)
if(h)a0.aY(0)},
aNh(d,e,f){var x,w,v,u,t,s,r=e.c,q=e.a,p=r-q,o=e.d,n=e.b,m=o-n,l=f!==C.NP
if(!l||f===C.NQ){x=D.e.fs((d.a-q)/p)
w=D.e.ir((d.c-r)/p)}else{x=0
w=0}if(!l||f===C.NR){v=D.e.fs((d.b-n)/m)
u=D.e.ir((d.d-o)/m)}else{v=0
u=0}r=A.a([],y.b)
for(t=x;t<=w;++t)for(q=t*p,s=v;s<=u;++s)r.push(e.d2(new A.t(q,s*m)))
return r},
oi:function oi(d,e){this.a=d
this.b=e},
Ak:function Ak(d,e,f,g,h,i){var _=this
_.D=null
_.ac=d
_.aq=e
_.bh=f
_.dA=_.bW=null
_.hJ=g
_.m$=h
_.go=_.fy=null
_.id=!1
_.k2=_.k1=null
_.k3=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=i
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
a8E:function a8E(d){this.a=d},
ko(d,e,f,g){return new B.Kg(g,d,f,e,null)},
Kg:function Kg(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a_k(d,e,f,g){return new A.d(((D.e.bw(g*255,1)&255)<<24|(d&255)<<16|(e&255)<<8|f&255)>>>0)}},D,A,C
B=a.updateHolder(c[20],B)
D=c[2]
A=c[0]
C=c[27]
B.qq.prototype={
i(d){return"BoxFit."+this.b}}
B.Kh.prototype={}
B.oi.prototype={
i(d){return"ImageRepeat."+this.b}}
B.Ak.prototype={
a0Z(){if(this.D!=null)return
this.D=this.aq},
Et(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
szr(d){var x=this,w=x.ac
if(w===d)return
x.ac=d
if(x.Et(w)||x.Et(d))x.a1()
else{x.dA=x.bW=null
x.an()}},
sfX(d){var x=this
if(x.aq.k(0,d))return
x.aq=d
x.D=x.dA=x.bW=null
x.an()},
sbj(d,e){var x=this
if(x.bh==e)return
x.bh=e
x.D=x.dA=x.bW=null
x.an()},
bR(d){var x,w=this.m$
if(w!=null){x=w.eO(D.c0)
switch(this.ac.a){case 6:return d.aO(new A.al(0,d.b,0,d.d).oD(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.oD(x)}}else return new A.S(D.f.H(0,d.a,d.b),D.f.H(0,d.c,d.d))},
by(){var x,w,v,u=this,t=u.m$
if(t!=null){t.cc(0,D.c0,!0)
switch(u.ac.a){case 6:t=y.a
x=t.a(A.w.prototype.ga6.call(u))
w=u.m$.k1
w.toString
v=new A.al(0,x.b,0,x.d).oD(w)
u.k1=t.a(A.w.prototype.ga6.call(u)).aO(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:t=y.a.a(A.w.prototype.ga6.call(u))
x=u.m$.k1
x.toString
u.k1=t.oD(x)
break}u.dA=u.bW=null}else{t=y.a.a(A.w.prototype.ga6.call(u))
u.k1=new A.S(D.f.H(0,t.a,t.b),D.f.H(0,t.c,t.d))}},
xQ(){var x,w,v,u,t,s,r,q,p,o=this
if(o.dA!=null)return
if(o.m$==null){o.bW=!1
x=new A.av(new Float64Array(16))
x.c2()
o.dA=x}else{o.a0Z()
x=o.m$.k1
x.toString
w=o.ac
v=o.k1
v.toString
u=B.azA(w,x,v)
v=u.b
w=u.a
t=x.a
x=x.b
s=o.D.zM(w,new A.E(0,0,0+t,0+x))
r=o.D
r.toString
q=o.k1
p=r.zM(v,new A.E(0,0,0+q.a,0+q.b))
r=s.a
o.bW=s.c-r<t||s.d-s.b<x
x=A.a5J(p.a,p.b,0)
x.hp(0,v.a/w.a,v.b/w.b,1)
x.aX(0,-r,-s.b)
o.dA=x}},
FH(d,e){var x,w,v,u,t=this,s=t.dA
s.toString
x=A.N5(s)
if(x==null){s=A.b(t.CW,"_needsCompositing")
w=t.dA
w.toString
v=A.dN.prototype.gfE.call(t)
u=t.ay.a
return d.pT(s,e,w,v,u instanceof A.mV?u:null)}else t.j6(d,e.Y(0,x))
return null},
aA(d,e){var x,w,v,u,t,s=this
if(s.m$!=null){x=s.k1
if(!x.gW(x)){x=s.m$.k1
x=x.gW(x)}else x=!0}else x=!0
if(x)return
s.xQ()
x=s.bW
x.toString
if(x&&s.hJ!==D.o){x=A.b(s.CW,"_needsCompositing")
w=s.k1
v=w.a
w=w.b
u=s.ay
t=u.a
t=t instanceof A.qE?t:null
u.sar(0,d.jZ(x,e,new A.E(0,0,0+v,0+w),s.ga0h(),s.hJ,t))}else s.ay.sar(0,s.FH(d,e))},
cv(d,e){var x=this,w=x.k1
if(!w.gW(w)){w=x.m$
if(w==null)w=null
else{w=w.k1
w=w.gW(w)}w=w===!0}else w=!0
if(w)return!1
x.xQ()
return d.rM(new B.a8E(x),e,x.dA)},
d4(d,e){var x=this.k1
if(!x.gW(x)){x=d.k1
x=x.gW(x)}else x=!0
if(x)e.vy()
else{this.xQ()
x=this.dA
x.toString
e.dB(0,x)}}}
B.Kg.prototype={
aC(d){var x=new B.Ak(this.e,this.f,A.dH(d),this.r,null,A.ap())
x.gam()
x.gaw()
x.CW=!1
x.saN(null)
return x},
aE(d,e){var x
e.szr(this.e)
e.sfX(this.f)
e.sbj(0,A.dH(d))
x=this.r
if(x!==e.hJ){e.hJ=x
e.an()
e.ao()}}}
var z=a.updateTypes(["mV?(hp,t)"])
B.a8E.prototype={
$2(d,e){return this.a.qA(d,e)},
$S:13};(function installTearOffs(){var x=a._instance_2u
x(B.Ak.prototype,"ga0h","FH",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.iL,[B.qq,B.oi])
w(B.Kh,A.C)
w(B.Ak,A.p1)
w(B.a8E,A.ha)
w(B.Kg,A.b_)})()
A.e2(b.typeUniverse,JSON.parse('{"qq":{"P":[]},"oi":{"P":[]},"Ak":{"D":[],"aI":["D"],"w":[],"R":[],"ak":[]},"Kg":{"b_":[],"ax":[],"f":[]}}'))
var y={a:A.I("al"),b:A.I("p<E>")};(function constants(){C.aU=new B.qq(0,"fill")
C.c1=new B.qq(1,"contain")
C.eg=new B.qq(6,"scaleDown")
C.N8=new B.Kh(D.R,D.R)
C.NP=new B.oi(0,"repeat")
C.NQ=new B.oi(1,"repeatX")
C.NR=new B.oi(2,"repeatY")
C.aY=new B.oi(3,"noRepeat")})()}
$__dart_deferred_initializers__["+xDcmnI75a2sZ9OAWHdP+6UccRQ="] = $__dart_deferred_initializers__.current
