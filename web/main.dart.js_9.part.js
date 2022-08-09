self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Ql:function Ql(){},B0:function B0(d,e){this.a=d
this.b=e},
Bc(d,e){var x=e==null&&!0
return new A.Pe(e,x,d,null)},
Pe:function Pe(d,e,f,g){var _=this
_.f=d
_.r=e
_.x=f
_.a=g},
abQ:function abQ(d,e,f){this.a=d
this.b=e
this.c=f},
vz:function vz(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Vk:function Vk(d,e){var _=this
_.d=_.c=_.b=_.a=_.cx=_.ch=_.p3=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
Ea:function Ea(d,e,f,g,h,i){var _=this
_.m=d
_.C=e
_.P=f
_.ak=g
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
alr:function alr(d,e){this.a=d
this.b=e},
alq:function alq(d,e){this.a=d
this.b=e},
Fo:function Fo(){},
Xb:function Xb(){},
Xc:function Xc(){},
at5(d){switch(d.a){case 0:return C.an
case 1:return C.aM}},
axw(d,e,f,g,h,i){var x,w,v,u,t,s,r
if(e==null)return h
x=i.lu(e,0,h)
w=i.lu(e,1,h)
v=g.as
v.toString
u=x.a
t=w.a
if(u<t)s=Math.abs(v-u)<Math.abs(v-t)?x:w
else if(v>u)s=x
else{if(!(v<t)){v=i.c
v.toString
r=e.cS(0,y.i.a(v))
return B.oI(r,h==null?e.ghW():h)}s=w}g.pz(0,s.a,d,f)
return s.b},
aA3(d,e,f){var x,w
switch(e.a){case 0:x=d.I(y.o)
x.toString
w=A.at5(x.f)
return w
case 1:return C.W}},
axe(d){return new B.td(null,d,null)}},C,B,D
A=a.updateHolder(c[17],A)
C=c[2]
B=c[0]
D=c[30]
A.Ql.prototype={
L0(d){if(y.h.b(d))++d.eh$
return!1}}
A.B0.prototype={
i(d){return"ScrollViewKeyboardDismissBehavior."+this.b}}
A.Pe.prototype={
F(d,e){var x,w,v,u=this,t=null,s={},r=A.aA3(e,C.aj,!1)
s.a=u.x
x=u.r
w=x?B.te(e):u.f
v=B.axF(r,w,C.ak,!1,t,t,t,t,new A.abQ(s,u,r))
return x&&w!=null?A.axe(v):v}}
A.vz.prototype={
aC(d){var x=new A.Ea(this.e,this.f,this.r,B.ap(),null,B.ap())
x.gam()
x.CW=!0
x.saN(null)
return x},
aF(d,e){var x
e.sdO(this.e)
e.siR(0,this.f)
x=this.r
if(x!==e.P){e.P=x
e.an()
e.ao()}},
cu(d){return new A.Vk(this,C.a1)}}
A.Vk.prototype={}
A.Ea.prototype={
sdO(d){if(d===this.m)return
this.m=d
this.a2()},
siR(d,e){var x=this,w=x.C
if(e===w)return
if(x.b!=null)w.L(0,x.gr5())
x.C=e
if(x.b!=null)e.a7(0,x.gr5())
x.a2()},
a_8(){this.an()
this.ao()},
e9(d){if(!(d.e instanceof B.cr))d.e=new B.cr()},
ap(d){this.Sd(d)
this.C.a7(0,this.gr5())},
aj(d){this.C.L(0,this.gr5())
this.Se(0)},
gam(){return!0},
ga3C(){switch(B.bh(this.m).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga_H(){var x=this,w=x.m$
if(w==null)return 0
switch(B.bh(x.m).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
GL(d){switch(B.bh(this.m).a){case 0:return new B.ak(0,1/0,d.c,d.d)
case 1:return new B.ak(d.a,d.b,0,1/0)}},
aV(d){var x=this.m$
if(x!=null)return x.ag(C.aD,d,x.gbr())
return 0},
aU(d){var x=this.m$
if(x!=null)return x.ag(C.a6,d,x.gbd())
return 0},
aP(d){var x=this.m$
if(x!=null)return x.ag(C.a3,d,x.gba())
return 0},
aT(d){var x=this.m$
if(x!=null)return x.ag(C.T,d,x.gb0())
return 0},
bR(d){var x=this.m$
if(x==null)return new B.S(C.f.H(0,d.a,d.b),C.f.H(0,d.c,d.d))
return d.aO(x.eO(this.GL(d)))},
bz(){var x=this,w=y.a.a(B.w.prototype.ga6.call(x)),v=x.m$
if(v==null)x.k1=new B.S(C.f.H(0,w.a,w.b),C.f.H(0,w.c,w.d))
else{v.ce(0,x.GL(w),!0)
v=x.m$.k1
v.toString
x.k1=w.aO(v)}x.C.ye(x.ga3C())
x.C.yc(0,x.ga_H())},
o7(d){var x=this
switch(x.m.a){case 0:return new B.t(0,d-x.m$.k1.b+x.k1.b)
case 2:return new B.t(0,-d)
case 3:return new B.t(d-x.m$.k1.a+x.k1.a,0)
case 1:return new B.t(-d,0)}},
GE(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.m$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
az(d,e){var x,w,v,u,t=this
if(t.m$!=null){x=t.C.as
x.toString
x=t.o7(x)
w=new A.alr(t,x)
x=t.GE(x)&&t.P!==C.n
v=t.ak
if(x){x=B.b(t.CW,"_needsCompositing")
u=t.k1
v.sar(0,d.k0(x,e,new B.D(0,0,0+u.a,0+u.b),w,t.P,v.a))}else{v.sar(0,null)
w.$2(d,e)}}},
n(d){this.ak.sar(0,null)
this.ik(0)},
d4(d,e){var x=this.C.as
x.toString
x=this.o7(x)
e.aX(0,x.a,x.b)},
jw(d){var x=this,w=x.C.as
w.toString
w=x.o7(w)
if(x.GE(w)){w=x.k1
return new B.D(0,0,0+w.a,0+w.b)}return null},
cw(d,e){var x,w=this
if(w.m$!=null){x=w.C.as
x.toString
return d.jo(new A.alq(w,e),w.o7(x),e)}return!1},
lu(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.ghW()
if(!(d instanceof B.E)){x=q.C.as
x.toString
return new B.tv(x,f)}w=B.oI(d.cS(0,q.m$),f)
x=q.m$.k1
x.toString
switch(q.m.a){case 0:v=q.k1.b
u=w.d
t=x.b-u
s=u-w.b
break
case 1:v=q.k1.a
t=w.a
s=w.c-t
break
case 2:v=q.k1.b
t=w.b
s=w.d-t
break
case 3:v=q.k1.a
u=w.c
t=x.a-u
s=u-w.a
break
default:t=null
s=null
v=null}r=t-(v-s)*e
return new B.tv(r,w.d2(q.o7(r)))},
eQ(d,e,f,g){this.CN(d,null,f,A.axw(d,e,f,this.C,g,this))},
nB(){return this.eQ(C.aw,null,C.B,null)},
lB(d,e){return this.eQ(C.aw,d,C.B,e)},
yP(d){var x
switch(B.bh(this.m).a){case 1:x=this.k1
return new B.D(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.D(-250,0,0+x.a+250,0+x.b)}},
$iOp:1}
A.Fo.prototype={
ap(d){var x
this.dm(d)
x=this.m$
if(x!=null)x.ap(d)},
aj(d){var x
this.d3(0)
x=this.m$
if(x!=null)x.aj(0)}}
A.Xb.prototype={}
A.Xc.prototype={}
var z=a.updateTypes(["O(O)","vz(a2,iE)","~()","~({curve:dG,descendant:w?,duration:aO,rect:D?})"])
A.abQ.prototype={
$2(d,e){return new A.vz(this.c,e,C.aq,this.a.a,null)},
$S:z+1}
A.alr.prototype={
$2(d,e){var x=this.a.m$
x.toString
d.dC(x,e.Y(0,this.b))},
$S:23}
A.alq.prototype={
$2(d,e){return this.a.m$.bE(d,e)},
$S:13};(function aliases(){var x=A.Fo.prototype
x.Sd=x.ap
x.Se=x.aj})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Ea.prototype,"gr5","a_8",2)
w(u,"gbr","aV",0)
w(u,"gbd","aU",0)
w(u,"gba","aP",0)
w(u,"gb0","aT",0)
v(u,"gnA",0,0,null,["$4$curve$descendant$duration$rect","$0","$2$descendant$rect"],["eQ","nB","lB"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Ql,B.C)
v(A.B0,B.iM)
v(A.Pe,B.aD)
u(B.hc,[A.abQ,A.alr,A.alq])
v(A.vz,B.b_)
v(A.Xb,B.tM)
v(A.Xc,A.Xb)
v(A.Vk,A.Xc)
v(A.Fo,B.E)
v(A.Ea,A.Fo)
x(A.Fo,B.aI)
w(A.Xb,B.zD)
w(A.Xc,A.Ql)})()
B.e2(b.typeUniverse,JSON.parse('{"B0":{"Q":[]},"vz":{"b_":[],"ax":[],"f":[]},"Pe":{"aD":[],"f":[]},"Vk":{"aX":[],"aV":[],"a2":[]},"Ea":{"E":[],"aI":["E"],"Op":[],"w":[],"R":[],"al":[]},"ql":{"P":[],"f":[]}}'))
var y={a:B.I("ak"),o:B.I("dI"),i:B.I("w"),h:B.I("f3")};(function constants(){D.a3p=new A.B0(0,"manual")
D.a3q=new A.B0(1,"onDrag")})()}
$__dart_deferred_initializers__["FvGCpW33fYNbq1U1hWhiPCWOT+4="] = $__dart_deferred_initializers__.current
