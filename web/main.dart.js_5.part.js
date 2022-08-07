self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
az8(d,e,f){var x,w,v,u,t,s,r=e.b
if(r<=0||e.a<=0||f.b<=0||f.a<=0)return C.N4
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
x=null}return new B.K9(w,x)},
qm:function qm(d,e){this.a=d
this.b=e},
K9:function K9(d,e){this.a=d
this.b=e},
azI(d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b1.gV(b1))return
x=b1.a
w=b1.c-x
v=b1.b
u=b1.d-v
t=new A.S(w,u)
s=a7.gce(a7)
r=a7.gcZ(a7)
if(a5==null)a5=C.ee
q=B.az8(a5,new A.S(s,r).dU(0,b3),t)
p=q.a.R(0,b3)
o=q.b
if(b2!==C.bb&&o.k(0,t))b2=C.bb
n=A.aS()
n.szQ(!1)
if(a2!=null)n.st6(a2)
n.sZ(0,B.a_d(0,0,0,b0))
n.smG(a4)
n.szM(a8)
m=o.a
l=(w-m)/2
k=o.b
j=(u-k)/2
u=d.a
u=x+(l+(a6?-u:u)*l)
v+=j+d.b*j
i=new A.E(u,v,u+m,v+k)
h=b2!==C.bb||a6
if(h)a0.b8(0)
v=b2===C.bb
if(!v)a0.mh(0,b1)
if(a6){g=-(x+w/2)
a0.aX(0,-g,0)
a0.dV(0,-1,1)
a0.aX(0,g,0)}f=d.zJ(p,new A.E(0,0,s,r))
if(v)a0.mt(a7,f,i,n)
else for(x=B.aMM(b1,i,b2),w=x.length,e=0;e<x.length;x.length===w||(0,A.T)(x),++e)a0.mt(a7,f,x[e],n)
if(h)a0.aY(0)},
aMM(d,e,f){var x,w,v,u,t,s,r=e.c,q=e.a,p=r-q,o=e.d,n=e.b,m=o-n,l=f!==C.NL
if(!l||f===C.NM){x=D.e.fq((d.a-q)/p)
w=D.e.iq((d.c-r)/p)}else{x=0
w=0}if(!l||f===C.NN){v=D.e.fq((d.b-n)/m)
u=D.e.iq((d.d-o)/m)}else{v=0
u=0}r=A.a([],y.b)
for(t=x;t<=w;++t)for(q=t*p,s=v;s<=u;++s)r.push(e.d1(new A.t(q,s*m)))
return r},
oe:function oe(d,e){this.a=d
this.b=e},
Aa:function Aa(d,e,f,g,h,i){var _=this
_.D=null
_.ac=d
_.aq=e
_.bh=f
_.dw=_.bW=null
_.hI=g
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
a8z:function a8z(d){this.a=d},
km(d,e,f,g){return new B.K8(g,d,f,e,null)},
K8:function K8(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a_d(d,e,f,g){return new A.d(((D.e.bw(g*255,1)&255)<<24|(d&255)<<16|(e&255)<<8|f&255)>>>0)}},D,A,C
B=a.updateHolder(c[18],B)
D=c[2]
A=c[0]
C=c[23]
B.qm.prototype={
i(d){return"BoxFit."+this.b}}
B.K9.prototype={}
B.oe.prototype={
i(d){return"ImageRepeat."+this.b}}
B.Aa.prototype={
a0R(){if(this.D!=null)return
this.D=this.aq},
Ep(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
szp(d){var x=this,w=x.ac
if(w===d)return
x.ac=d
if(x.Ep(w)||x.Ep(d))x.a0()
else{x.dw=x.bW=null
x.an()}},
sfW(d){var x=this
if(x.aq.k(0,d))return
x.aq=d
x.D=x.dw=x.bW=null
x.an()},
sbj(d,e){var x=this
if(x.bh==e)return
x.bh=e
x.D=x.dw=x.bW=null
x.an()},
bR(d){var x,w=this.m$
if(w!=null){x=w.eM(D.bW)
switch(this.ac.a){case 6:return d.aO(new A.al(0,d.b,0,d.d).oz(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.oz(x)}}else return new A.S(D.f.H(0,d.a,d.b),D.f.H(0,d.c,d.d))},
by(){var x,w,v,u=this,t=u.m$
if(t!=null){t.cc(0,D.bW,!0)
switch(u.ac.a){case 6:t=y.a
x=t.a(A.w.prototype.ga5.call(u))
w=u.m$.k1
w.toString
v=new A.al(0,x.b,0,x.d).oz(w)
u.k1=t.a(A.w.prototype.ga5.call(u)).aO(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:t=y.a.a(A.w.prototype.ga5.call(u))
x=u.m$.k1
x.toString
u.k1=t.oz(x)
break}u.dw=u.bW=null}else{t=y.a.a(A.w.prototype.ga5.call(u))
u.k1=new A.S(D.f.H(0,t.a,t.b),D.f.H(0,t.c,t.d))}},
xP(){var x,w,v,u,t,s,r,q,p,o=this
if(o.dw!=null)return
if(o.m$==null){o.bW=!1
x=new A.au(new Float64Array(16))
x.c2()
o.dw=x}else{o.a0R()
x=o.m$.k1
x.toString
w=o.ac
v=o.k1
v.toString
u=B.az8(w,x,v)
v=u.b
w=u.a
t=x.a
x=x.b
s=o.D.zJ(w,new A.E(0,0,0+t,0+x))
r=o.D
r.toString
q=o.k1
p=r.zJ(v,new A.E(0,0,0+q.a,0+q.b))
r=s.a
o.bW=s.c-r<t||s.d-s.b<x
x=A.a5E(p.a,p.b,0)
x.hp(0,v.a/w.a,v.b/w.b,1)
x.aX(0,-r,-s.b)
o.dw=x}},
FC(d,e){var x,w,v,u,t=this,s=t.dw
s.toString
x=A.MY(s)
if(x==null){s=A.b(t.CW,"_needsCompositing")
w=t.dw
w.toString
v=A.dK.prototype.gfD.call(t)
u=t.ay.a
return d.pQ(s,e,w,v,u instanceof A.mS?u:null)}else t.j5(d,e.Y(0,x))
return null},
az(d,e){var x,w,v,u,t,s=this
if(s.m$!=null){x=s.k1
if(!x.gV(x)){x=s.m$.k1
x=x.gV(x)}else x=!0}else x=!0
if(x)return
s.xP()
x=s.bW
x.toString
if(x&&s.hI!==D.o){x=A.b(s.CW,"_needsCompositing")
w=s.k1
v=w.a
w=w.b
u=s.ay
t=u.a
t=t instanceof A.qA?t:null
u.sar(0,d.jZ(x,e,new A.E(0,0,0+v,0+w),s.ga09(),s.hI,t))}else s.ay.sar(0,s.FC(d,e))},
cv(d,e){var x=this,w=x.k1
if(!w.gV(w)){w=x.m$
if(w==null)w=null
else{w=w.k1
w=w.gV(w)}w=w===!0}else w=!0
if(w)return!1
x.xP()
return d.rI(new B.a8z(x),e,x.dw)},
d3(d,e){var x=this.k1
if(!x.gV(x)){x=d.k1
x=x.gV(x)}else x=!0
if(x)e.vx()
else{this.xP()
x=this.dw
x.toString
e.dz(0,x)}}}
B.K8.prototype={
aC(d){var x=new B.Aa(this.e,this.f,A.dE(d),this.r,null,A.ap())
x.gam()
x.gaw()
x.CW=!1
x.saN(null)
return x},
aE(d,e){var x
e.szp(this.e)
e.sfW(this.f)
e.sbj(0,A.dE(d))
x=this.r
if(x!==e.hI){e.hI=x
e.an()
e.ao()}}}
var z=a.updateTypes(["mS?(hn,t)"])
B.a8z.prototype={
$2(d,e){return this.a.qx(d,e)},
$S:13};(function installTearOffs(){var x=a._instance_2u
x(B.Aa.prototype,"ga09","FC",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.iI,[B.qm,B.oe])
w(B.K9,A.C)
w(B.Aa,A.oZ)
w(B.a8z,A.h8)
w(B.K8,A.b_)})()
A.eM(b.typeUniverse,JSON.parse('{"qm":{"Q":[]},"oe":{"Q":[]},"Aa":{"D":[],"aI":["D"],"w":[],"P":[],"ak":[]},"K8":{"b_":[],"ax":[],"f":[]}}'))
var y={a:A.O("al"),b:A.O("q<E>")};(function constants(){C.bX=new B.qm(0,"fill")
C.bY=new B.qm(1,"contain")
C.ee=new B.qm(6,"scaleDown")
C.N4=new B.K9(D.Q,D.Q)
C.NL=new B.oe(0,"repeat")
C.NM=new B.oe(1,"repeatX")
C.NN=new B.oe(2,"repeatY")
C.bb=new B.oe(3,"noRepeat")})()}
$__dart_deferred_initializers__["WDe6xApmNaSIZxgaS1NztgpfiQM="] = $__dart_deferred_initializers__.current
