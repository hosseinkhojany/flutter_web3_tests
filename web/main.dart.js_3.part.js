self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
agR(d,e,f){var x,w,v,u,t,s,r=e.b
if(r<=0||e.a<=0||f.b<=0||f.a<=0)return D.vr
switch(d.a){case 0:x=f
w=e
break
case 1:v=f.a
u=f.b
t=e.a
x=v/u>t/r?new B.a3(t*u/r,u):new B.a3(v,r*v/t)
w=e
break
case 2:v=f.a
u=f.b
t=e.a
w=v/u>t/r?new B.a3(t,t*u/v):new B.a3(r*v/u,r)
x=f
break
case 3:r=e.a
v=f.a
u=r*f.b/v
w=new B.a3(r,u)
x=new B.a3(v,u*v/r)
break
case 4:v=f.b
u=r*f.a/v
w=new B.a3(u,r)
x=new B.a3(u*v/r,v)
break
case 5:w=new B.a3(Math.min(e.a,f.a),Math.min(r,f.b))
x=w
break
case 6:s=e.a/r
v=f.b
x=r>v?new B.a3(v*s,v):e
r=f.a
if(x.a>r)x=new B.a3(r,r/s)
w=e
break
default:w=null
x=null}return new A.wY(w,x)},
HA:function HA(d,e){this.a=d
this.b=e},
wY:function wY(d,e){this.a=d
this.b=e},
qK:function qK(d,e,f,g,h,i){var _=this
_.B=null
_.U=d
_.a8=e
_.br=f
_.co=_.bC=null
_.ei=g
_.u$=h
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
PC:function PC(d){this.a=d},
i6:function i6(d,e){this.a=d
this.b=e},
wX:function wX(d,e,f){this.e=d
this.c=e
this.a=f},
jr:function jr(d,e){this.a=d
this.b=e},
ig:function ig(d,e){this.a=d
this.b=e},
k4:function k4(d,e){this.a=d
this.b=e},
oe:function oe(d,e,f,g,h,i,j){var _=this
_.r=d
_.y=e
_.Q=f
_.c=g
_.d=h
_.e=i
_.a=j},
B2:function B2(d,e,f){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.eL$=d
_.cV$=e
_.a=null
_.b=f
_.c=null},
U1:function U1(){},
U2:function U2(){},
U3:function U3(){},
U4:function U4(){},
U5:function U5(){},
U6:function U6(){},
U7:function U7(){},
U8:function U8(){},
a_g(d){d=B.l0(d.toUpperCase(),"#","")
return B.dE(d.length===6?"FF"+d:d,16)},
lL:function lL(d){this.a=d},
ack(){return new A.ik(null)},
ik:function ik(d){this.a=d},
xi:function xi(d){this.a=null
this.b=d
this.c=null},
Lo:function Lo(){},
Lp:function Lp(){},
Lq:function Lq(){},
Lr:function Lr(){},
Ls:function Ls(){},
Lt:function Lt(){},
Lu:function Lu(){},
ZS(d,e,f,g,h,i){return new A.oo(g,i,d,h,e,f,null)},
oo:function oo(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.w=130
_.x=h
_.y=50
_.z=i
_.a=j},
Bb:function Bb(d){var _=this
_.d=!1
_.a=null
_.b=d
_.c=null},
Uh:function Uh(d){this.a=d},
Ug:function Ug(d,e){this.a=d
this.b=e},
Ui:function Ui(d){this.a=d},
a3T(){var x=new Float64Array(4)
x[3]=1
return new A.iJ(x)},
iJ:function iJ(d){this.a=d}},C,B,E,D
A=a.updateHolder(c[4],A)
C=c[2]
B=c[0]
E=c[5]
D=c[6]
A.HA.prototype={
h(d){return"BoxFit."+this.b}}
A.wY.prototype={}
A.qK.prototype={
M2(){if(this.B!=null)return
this.B=this.a8},
vN(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
sPM(d){var x=this,w=x.U
if(w===d)return
x.U=d
if(x.vN(w)||x.vN(d))x.a_()
else{x.co=x.bC=null
x.ae()}},
sfn(d){var x=this
if(x.a8.k(0,d))return
x.a8=d
x.B=x.co=x.bC=null
x.ae()},
sby(d,e){var x=this
if(x.br==e)return
x.br=e
x.B=x.co=x.bC=null
x.ae()},
bL(d){var x,w=this.u$
if(w!=null){x=w.f3(C.al)
switch(this.U.a){case 6:return d.ba(new B.ay(0,d.b,0,d.d).mw(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.mw(x)}}else return new B.a3(C.h.P(0,d.a,d.b),C.h.P(0,d.c,d.d))},
bJ(){var x,w,v=this,u=v.u$
if(u!=null){u.dq(0,C.al,!0)
switch(v.U.a){case 6:u=B.O.prototype.gbl.call(v)
x=v.u$.k1
x.toString
w=new B.ay(0,u.b,0,u.d).mw(x)
v.k1=B.O.prototype.gbl.call(v).ba(w)
break
case 1:case 2:case 0:case 4:case 3:case 5:u=B.O.prototype.gbl.call(v)
x=v.u$.k1
x.toString
v.k1=u.mw(x)
break}v.co=v.bC=null}else{u=B.O.prototype.gbl.call(v)
v.k1=new B.a3(C.h.P(0,u.a,u.b),C.h.P(0,u.c,u.d))}},
pZ(){var x,w,v,u,t,s,r,q,p,o=this
if(o.co!=null)return
if(o.u$==null){o.bC=!1
x=new B.aE(new Float64Array(16))
x.cu()
o.co=x}else{o.M2()
x=o.u$.k1
x.toString
w=o.U
v=o.k1
v.toString
u=A.agR(w,x,v)
v=u.b
w=u.a
t=x.a
x=x.b
s=o.B.zJ(w,new B.T(0,0,0+t,0+x))
r=o.B
r.toString
q=o.k1
p=r.zJ(v,new B.T(0,0,0+q.a,0+q.b))
r=s.a
o.bC=s.c-r<t||s.d-s.b<x
x=B.a_y(p.a,p.b,0)
x.jh(0,v.a/w.a,v.b/w.b,1)
x.bk(0,-r,-s.b)
o.co=x}},
wB(d,e){var x,w,v,u,t=this,s=t.co
s.toString
x=B.Nj(s)
if(x==null){s=B.d(t.CW,"_needsCompositing")
w=t.co
w.toString
v=B.dv.prototype.gj4.call(t)
u=t.ay.a
return d.t1(s,e,w,v,u instanceof B.iX?u:null)}else t.h2(d,e.S(0,x))
return null},
aY(d,e){var x,w,v,u,t,s=this
if(s.u$!=null){x=s.k1
if(!x.gH(x)){x=s.u$.k1
x=x.gH(x)}else x=!0}else x=!0
if(x)return
s.pZ()
x=s.bC
x.toString
if(x&&s.ei!==C.x){x=B.d(s.CW,"_needsCompositing")
w=s.k1
v=w.a
w=w.b
u=s.ay
t=u.a
t=t instanceof B.oK?t:null
u.saD(0,d.ns(x,e,new B.T(0,0,0+v,0+w),s.gLy(),s.ei,t))}else s.ay.saD(0,s.wB(d,e))},
c2(d,e){var x=this,w=x.k1
if(!w.gH(w)){w=x.u$
if(w==null)w=null
else{w=w.k1
w=w.gH(w)}w=w===!0}else w=!0
if(w)return!1
x.pZ()
return d.q8(new A.PC(x),e,x.co)},
di(d,e){var x=this.k1
if(!x.gH(x)){x=d.k1
x=x.gH(x)}else x=!0
if(x){x=e.a
x[0]=0
x[1]=0
x[2]=0
x[3]=0
x[4]=0
x[5]=0
x[6]=0
x[7]=0
x[8]=0
x[9]=0
x[10]=0
x[11]=0
x[12]=0
x[13]=0
x[14]=0
x[15]=0}else{this.pZ()
x=this.co
x.toString
e.dr(0,x)}}}
A.i6.prototype={
bO(d){return B.H5(this.a,this.b,d)}}
A.wX.prototype={
an(d){var x=new A.qK(this.e,C.Z,B.cI(d),C.x,null,B.aA())
x.ga9()
x.gai()
x.CW=!1
x.saG(null)
return x},
aE(d,e){e.sPM(this.e)
e.sfn(C.Z)
e.sby(0,B.cI(d))
if(C.x!==e.ei){e.ei=C.x
e.ae()
e.a1()}}}
A.jr.prototype={
bO(d){var x=B.ld(this.a,this.b,d)
x.toString
return x}}
A.ig.prototype={
bO(d){var x=B.d9(this.a,this.b,d)
x.toString
return x}}
A.k4.prototype={
bO(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.c7(new Float64Array(3)),a3=new B.c7(new Float64Array(3)),a4=A.a3T(),a5=A.a3T(),a6=new B.c7(new Float64Array(3)),a7=new B.c7(new Float64Array(3))
this.a.yK(a2,a4,a6)
this.b.yK(a3,a5,a7)
x=1-a8
w=a2.f5(x).S(0,a3.f5(a8))
v=a4.f5(x).S(0,a5.f5(a8))
u=new Float64Array(4)
t=new A.iJ(u)
t.aK(v)
t.Rr(0)
s=a6.f5(x).S(0,a7.f5(a8))
x=new Float64Array(16)
v=new B.aE(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.ah(0,s)
return v}}
A.oe.prototype={
ad(){return new A.B2(null,null,C.n)}}
A.B2.prototype={
iG(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.K
u.CW=x.a(d.$3(s,t,new A.U1()))
s=u.cx
u.a.toString
w=y.Z
u.cx=w.a(d.$3(s,t,new A.U2()))
s=y.h
u.cy=s.a(d.$3(u.cy,u.a.y,new A.U3()))
v=u.db
u.a.toString
u.db=s.a(d.$3(v,t,new A.U4()))
u.dx=y.E.a(d.$3(u.dx,u.a.Q,new A.U5()))
v=u.dy
u.a.toString
u.dy=w.a(d.$3(v,t,new A.U6()))
v=u.fr
u.a.toString
u.fr=y.e.a(d.$3(v,t,new A.U7()))
v=u.fx
u.a.toString
u.fx=x.a(d.$3(v,t,new A.U8()))},
K(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.gd7(),n=q.CW
n=n==null?p:n.a0(0,o.gn(o))
x=q.cx
x=x==null?p:x.a0(0,o.gn(o))
w=q.cy
w=w==null?p:w.a0(0,o.gn(o))
v=q.db
v=v==null?p:v.a0(0,o.gn(o))
u=q.dx
u=u==null?p:u.a0(0,o.gn(o))
t=q.dy
t=t==null?p:t.a0(0,o.gn(o))
s=q.fr
s=s==null?p:s.a0(0,o.gn(o))
r=q.fx
r=r==null?p:r.a0(0,o.gn(o))
return B.wf(n,q.a.r,C.x,p,u,w,v,p,t,x,s,r,p)}}
A.lL.prototype={}
A.ik.prototype={
ad(){return new A.xi(C.n)}}
A.xi.prototype={
K(d,e){var x=null,w="#4d0082",v="https://opensea.com",u=y.p
return E.a4a(x,B.Ac(C.bP,B.a([B.oA(new A.wX(D.qX,B.abo(B.a([B.fB(x,25,x),new B.l6(C.qA,x,x,A.ZS(new A.lL(A.a_g(w)>>>0),50,new A.Lo(),"White Paper",C.i,150),x),B.fB(x,15,x),A.ZS(new A.lL(A.a_g(w)>>>0),50,new A.Lp(),"Mint",C.i,150),B.fB(x,15,x),A.ZS(new A.lL(A.a_g(w)>>>0),50,new A.Lq(),"Open Market",C.i,150),B.fB(x,40,x),B.zy(B.a([B.hJ("Gift Address: ",x,x,x,x,x,x),B.pw(!1,!0,B.hJ("0x24EA7355AB34234EAA43B324478",x,x,x,B.hL(x,x,C.au,x,C.bL,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x),x,!0,x,x,x,x,x,x,x,x,x,new A.Lr(),x,x,x)],u),C.aW),B.fB(x,20,x),B.zy(B.a([B.hJ("Twitter: ",x,x,x,x,x,x),B.pw(!1,!0,B.hJ(v,x,x,x,B.hL(x,x,C.au,x,C.bL,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x),x,!0,x,x,x,x,x,x,x,x,x,new A.Ls(),x,x,x)],u),C.aW),B.fB(x,20,x),B.zy(B.a([B.hJ("Etherscan: ",x,x,x,x,x,x),B.pw(!1,!0,B.hJ(v,x,x,x,B.hL(x,x,C.au,x,C.bL,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x),x,!0,x,x,x,x,x,x,x,x,x,new A.Lt(),x,x,x)],u),C.aW),B.fB(x,20,x),B.zy(B.a([B.hJ("Open Sea: ",x,x,x,x,x,x),B.pw(!1,!0,B.hJ(v,x,x,x,B.hL(x,x,C.au,x,C.bL,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x),x,!0,x,x,x,x,x,x,x,x,x,new A.Lu(),x,x,x)],u),C.aW)],u),C.aW),x),x,x)],u),C.cw))}}
A.oo.prototype={
ad(){return new A.Bb(C.n)}}
A.Bb.prototype={
K(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.e
n.w=m
x=n.x
n.y=x
w=B.bQ(0,300)
v=p.d
u=v?x-5:x
v=v?m-10:m
n=n.f
t=B.a2e(new B.bp(30,30))
s=B.a([new B.ed(0,C.il,B.bv(C.e.aU(76.5),0,0,0),new B.R(3,7),30)],y.V)
r=p.a
q=r.c
r=r.r
r=B.oA(B.hJ(q,o,o,o,B.hL(o,o,r,o,o,o,o,o,o,o,o,19,o,C.W,o,o,!0,o,o,o,o,o,o,o,o),o,o),o,o)
v=B.ow(u,v)
return B.fB(B.oA(B.pw(!1,!0,new A.oe(r,new B.fY(n,o,o,t,s,o,C.bc),v,C.cU,w,o,o),o,!0,o,o,C.aq,C.aq,o,o,new A.Uh(p),o,o,new A.Ui(p),o,C.aq,o),o,o),x,m)}}
A.iJ.prototype={
aK(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
C5(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
Rr(d){var x,w,v=Math.sqrt(this.gkJ())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gkJ(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gm(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
f5(d){var x=new Float64Array(4),w=new A.iJ(x)
w.aK(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
I(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gTz(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
h=C.e.I(g,a4)
x=C.e.I(d,a1)
w=C.e.I(e,a2)
v=C.e.I(f,a3)
u=C.e.I(g,a3)
t=C.e.I(e,a1)
s=C.e.I(f,a4)
r=C.e.I(d,a2)
q=C.e.I(g,a2)
p=C.e.I(f,a1)
o=C.e.I(d,a3)
n=C.e.I(e,a4)
m=C.e.I(g,a1)
l=C.e.I(d,a4)
k=C.e.I(e,a3)
j=C.e.I(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.iJ(i)},
S(d,e){var x,w=new Float64Array(4),v=new A.iJ(w)
v.aK(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
Y(d,e){var x,w=new Float64Array(4),v=new A.iJ(w)
v.aK(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
i(d,e){return this.a[e]},
h(d){var x=this.a
return B.j(x[0])+", "+B.j(x[1])+", "+B.j(x[2])+" @ "+B.j(x[3])}}
var z=a.updateTypes(["i6(@)","ig(@)","iX?(iD,R)","jr(@)","k4(@)"])
A.PC.prototype={
$2(d,e){return this.a.lz(d,e)},
$S:17}
A.U1.prototype={
$1(d){return new A.i6(y.D.a(d),null)},
$S:z+0}
A.U2.prototype={
$1(d){return new A.ig(y.W.a(d),null)},
$S:z+1}
A.U3.prototype={
$1(d){return new B.h1(y.S.a(d),null)},
$S:98}
A.U4.prototype={
$1(d){return new B.h1(y.S.a(d),null)},
$S:98}
A.U5.prototype={
$1(d){return new A.jr(y.k.a(d),null)},
$S:z+3}
A.U6.prototype={
$1(d){return new A.ig(y.W.a(d),null)},
$S:z+1}
A.U7.prototype={
$1(d){return new A.k4(y.w.a(d),null)},
$S:z+4}
A.U8.prototype={
$1(d){return new A.i6(y.D.a(d),null)},
$S:z+0}
A.Lo.prototype={
$0(){},
$S:2}
A.Lp.prototype={
$0(){},
$S:2}
A.Lq.prototype={
$0(){},
$S:2}
A.Lr.prototype={
$0(){},
$S:0}
A.Ls.prototype={
$0(){},
$S:0}
A.Lt.prototype={
$0(){},
$S:0}
A.Lu.prototype={
$0(){},
$S:0}
A.Uh.prototype={
$1(d){var x=this.a
x.aq(new A.Ug(x,d))},
$S:21}
A.Ug.prototype={
$0(){this.a.d=this.b},
$S:0}
A.Ui.prototype={
$0(){this.a.a.z.$0()},
$S:0};(function installTearOffs(){var x=a._instance_2u
x(A.qK.prototype,"gLy","wB",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.HA,B.Ca)
w(B.B,[A.wY,A.iJ])
x(A.qK,B.qM)
x(A.PC,B.oL)
w(B.ao,[A.i6,A.jr,A.ig,A.k4])
x(A.wX,B.aU)
x(A.oe,B.ps)
x(A.B2,B.jk)
w(B.bC,[A.U1,A.U2,A.U3,A.U4,A.U5,A.U6,A.U7,A.U8,A.Uh])
x(A.lL,B.W)
w(B.a7,[A.ik,A.oo])
w(B.ak,[A.xi,A.Bb])
w(B.ln,[A.Lo,A.Lp,A.Lq,A.Lr,A.Ls,A.Lt,A.Lu,A.Ug,A.Ui])})()
B.a0o(b.typeUniverse,JSON.parse('{"qK":{"N":[],"aF":["N"],"O":[],"M":[],"an":[]},"i6":{"ao":["dH?"],"ac":["dH?"],"ac.T":"dH?","ao.T":"dH?"},"wX":{"aU":[],"ax":[],"o":[]},"jr":{"ao":["ay"],"ac":["ay"],"ac.T":"ay","ao.T":"ay"},"ig":{"ao":["bD"],"ac":["bD"],"ac.T":"bD","ao.T":"bD"},"k4":{"ao":["aE"],"ac":["aE"],"ac.T":"aE","ao.T":"aE"},"oe":{"a7":[],"o":[]},"B2":{"ak":["oe"]},"lL":{"W":[]},"ik":{"a7":[],"o":[]},"xi":{"ak":["ik"]},"oo":{"a7":[],"o":[]},"Bb":{"ak":["oo"]}}'))
var y=(function rtii(){var x=B.S
return{D:x("dH"),k:x("ay"),S:x("ej"),W:x("bD"),V:x("r<ed>"),p:x("r<o>"),w:x("aE"),K:x("i6?"),E:x("jr?"),h:x("h1?"),Z:x("ig?"),e:x("k4?")}})();(function constants(){D.qX=new A.HA(5,"none")
D.vr=new A.wY(C.B,C.B)})()}
$__dart_deferred_initializers__["/q+kY6Dqr59kSKOj6rIlECz0H2g="] = $__dart_deferred_initializers__.current
