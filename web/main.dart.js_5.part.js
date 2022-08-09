self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
az9(d,e,f){var x,w,v,u,t,s,r=e.b
if(r<=0||e.a<=0||f.b<=0||f.a<=0)return C.Mf
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
x=null}return new B.Ju(w,x)},
ql:function ql(d,e){this.a=d
this.b=e},
Ju:function Ju(d,e){this.a=d
this.b=e},
azT(d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b1.ga0(b1))return
x=b1.a
w=b1.c-x
v=b1.b
u=b1.d-v
t=new A.S(w,u)
s=a7.gb8(a7)
r=a7.gbQ(a7)
if(a5==null)a5=C.eC
q=B.az9(a5,new A.S(s,r).dk(0,b3),t)
p=q.a.R(0,b3)
o=q.b
if(b2!==C.b0&&o.k(0,t))b2=C.b0
n=new A.aP(new A.aR())
n.sB4(!1)
if(a2!=null)n.szG(a2)
n.sa_(0,B.ZL(0,0,0,b0))
n.sn8(a4)
n.sB1(a8)
m=o.a
l=(w-m)/2
k=o.b
j=(u-k)/2
u=d.a
u=x+(l+(a6?-u:u)*l)
v+=j+d.b*j
i=new A.y(u,v,u+m,v+k)
h=b2!==C.b0||a6
if(h)a0.bt(0)
v=b2===C.b0
if(!v)a0.iQ(0,b1)
if(a6){g=-(x+w/2)
a0.az(0,-g,0)
a0.cw(0,-1,1)
a0.az(0,g,0)}f=d.AY(p,new A.y(0,0,s,r))
if(v)a0.ld(a7,f,i,n)
else for(x=B.aKH(b1,i,b2),w=x.length,e=0;e<x.length;x.length===w||(0,A.T)(x),++e)a0.ld(a7,f,x[e],n)
if(h)a0.bB(0)},
aKH(d,e,f){var x,w,v,u,t,s,r=e.c,q=e.a,p=r-q,o=e.d,n=e.b,m=o-n,l=f!==C.MP
if(!l||f===C.MQ){x=D.e.df((d.a-q)/p)
w=D.e.eo((d.c-r)/p)}else{x=0
w=0}if(!l||f===C.MR){v=D.e.df((d.b-n)/m)
u=D.e.eo((d.d-o)/m)}else{v=0
u=0}r=A.a([],y.b)
for(t=x;t<=w;++t)for(q=t*p,s=v;s<=u;++s)r.push(e.d9(new A.m(q,s*m)))
return r},
ob:function ob(d,e){this.a=d
this.b=e},
Aa:function Aa(d,e,f,g,h,i){var _=this
_.C=null
_.ac=d
_.ar=e
_.bk=f
_.dM=_.c1=null
_.i2=g
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
a87:function a87(d){this.a=d},
ki(d,e,f,g){return new B.Jt(g,d,f,e,null)},
Jt:function Jt(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
ZL(d,e,f,g){return new A.e(((D.e.bm(g*255,1)&255)<<24|(d&255)<<16|(e&255)<<8|f&255)>>>0)}},D,A,C
B=a.updateHolder(c[20],B)
D=c[2]
A=c[0]
C=c[27]
B.ql.prototype={
i(d){return"BoxFit."+this.b}}
B.Ju.prototype={}
B.ob.prototype={
i(d){return"ImageRepeat."+this.b}}
B.Aa.prototype={
a07(){if(this.C!=null)return
this.C=this.ar},
FS(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
sAC(d){var x=this,w=x.ac
if(w===d)return
x.ac=d
if(x.FS(w)||x.FS(d))x.a1()
else{x.dM=x.c1=null
x.ao()}},
shg(d){var x=this
if(x.ar.k(0,d))return
x.ar=d
x.C=x.dM=x.c1=null
x.ao()},
sbl(d,e){var x=this
if(x.bk==e)return
x.bk=e
x.C=x.dM=x.c1=null
x.ao()},
bW(d){var x,w=this.m$
if(w!=null){x=w.f3(D.c9)
switch(this.ac.a){case 6:return d.aQ(new A.aj(0,d.b,0,d.d).p_(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.p_(x)}}else return new A.S(D.f.H(0,d.a,d.b),D.f.H(0,d.c,d.d))},
bH(){var x,w,v,u=this,t=u.m$
if(t!=null){t.cn(0,D.c9,!0)
switch(u.ac.a){case 6:t=y.a
x=t.a(A.v.prototype.ga6.call(u))
w=u.m$.k1
w.toString
v=new A.aj(0,x.b,0,x.d).p_(w)
u.k1=t.a(A.v.prototype.ga6.call(u)).aQ(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:t=y.a.a(A.v.prototype.ga6.call(u))
x=u.m$.k1
x.toString
u.k1=t.p_(x)
break}u.dM=u.c1=null}else{t=y.a.a(A.v.prototype.ga6.call(u))
u.k1=new A.S(D.f.H(0,t.a,t.b),D.f.H(0,t.c,t.d))}},
yY(){var x,w,v,u,t,s,r,q,p,o=this
if(o.dM!=null)return
if(o.m$==null){o.c1=!1
x=new A.at(new Float64Array(16))
x.ca()
o.dM=x}else{o.a07()
x=o.m$.k1
x.toString
w=o.ac
v=o.k1
v.toString
u=B.az9(w,x,v)
v=u.b
w=u.a
t=x.a
x=x.b
s=o.C.AY(w,new A.y(0,0,0+t,0+x))
r=o.C
r.toString
q=o.k1
p=r.AY(v,new A.y(0,0,0+q.a,0+q.b))
r=s.a
o.c1=s.c-r<t||s.d-s.b<x
x=A.a58(p.a,p.b,0)
x.hI(0,v.a/w.a,v.b/w.b,1)
x.az(0,-r,-s.b)
o.dM=x}},
H6(d,e){var x,w,v,u,t=this,s=t.dM
s.toString
x=A.Mi(s)
if(x==null){s=A.b(t.CW,"_needsCompositing")
w=t.dM
w.toString
v=A.dP.prototype.gfX.call(t)
u=t.ay.a
return d.qi(s,e,w,v,u instanceof A.mO?u:null)}else t.jz(d,e.V(0,x))
return null},
aw(d,e){var x,w,v,u,t,s=this
if(s.m$!=null){x=s.k1
if(!x.ga0(x)){x=s.m$.k1
x=x.ga0(x)}else x=!0}else x=!0
if(x)return
s.yY()
x=s.c1
x.toString
if(x&&s.i2!==D.n){x=A.b(s.CW,"_needsCompositing")
w=s.k1
v=w.a
w=w.b
u=s.ay
t=u.a
t=t instanceof A.qu?t:null
u.sau(0,d.ks(x,e,new A.y(0,0,0+v,0+w),s.ga_m(),s.i2,t))}else s.ay.sau(0,s.H6(d,e))},
cH(d,e){var x=this,w=x.k1
if(!w.ga0(w)){w=x.m$
if(w==null)w=null
else{w=w.k1
w=w.ga0(w)}w=w===!0}else w=!0
if(w)return!1
x.yY()
return d.tm(new B.a87(x),e,x.dM)},
dd(d,e){var x=this.k1
if(!x.ga0(x)){x=d.k1
x=x.ga0(x)}else x=!0
if(x)e.w7()
else{this.yY()
x=this.dM
x.toString
e.cB(0,x)}}}
B.Jt.prototype={
aD(d){var x=new B.Aa(this.e,this.f,A.dK(d),this.r,null,A.am())
x.gan()
x.gaA()
x.CW=!1
x.saP(null)
return x},
aH(d,e){var x
e.sAC(this.e)
e.shg(this.f)
e.sbl(0,A.dK(d))
x=this.r
if(x!==e.i2){e.i2=x
e.ao()
e.ap()}}}
var z=a.updateTypes(["mO?(hr,m)"])
B.a87.prototype={
$2(d,e){return this.a.r4(d,e)},
$S:13};(function installTearOffs(){var x=a._instance_2u
x(B.Aa.prototype,"ga_m","H6",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.iN,[B.ql,B.ob])
w(B.Ju,A.D)
w(B.Aa,A.oT)
w(B.a87,A.hb)
w(B.Jt,A.aY)})()
A.e6(b.typeUniverse,JSON.parse('{"ql":{"O":[]},"ob":{"O":[]},"Aa":{"C":[],"aG":["C"],"v":[],"Q":[],"ah":[]},"Jt":{"aY":[],"av":[],"h":[]}}'))
var y={a:A.N("aj"),b:A.N("r<y>")};(function constants(){C.aX=new B.ql(0,"fill")
C.ca=new B.ql(1,"contain")
C.eC=new B.ql(6,"scaleDown")
C.Mf=new B.Ju(D.R,D.R)
C.MP=new B.ob(0,"repeat")
C.MQ=new B.ob(1,"repeatX")
C.MR=new B.ob(2,"repeatY")
C.b0=new B.ob(3,"noRepeat")})()}
$__dart_deferred_initializers__["07y6hLn3OPAJcxypjp4/WrTyaFY="] = $__dart_deferred_initializers__.current
