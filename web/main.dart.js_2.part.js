self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={lv:function lv(d,e){this.a=d
this.b=e},
aq8(d,e,f,g,h,i){var x,w
if(f==null)x=null
else x=f
w=B.nv(h,i)
return new A.vN(d,x,w,e,g,null,null)},
nw:function nw(d,e){this.a=d
this.b=e},
hc:function hc(d,e){this.a=d
this.b=e},
oz:function oz(d,e){this.a=d
this.b=e},
vN:function vN(d,e,f,g,h,i,j){var _=this
_.r=d
_.y=e
_.Q=f
_.c=g
_.d=h
_.e=i
_.a=j},
Q4:function Q4(d,e,f){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.eS$=d
_.cc$=e
_.a=null
_.b=f
_.c=null},
agn:function agn(){},
ago:function ago(){},
agp:function agp(){},
agq:function agq(){},
agr:function agr(){},
ags:function ags(){},
agt:function agt(){},
agu:function agu(){},
awt(){var x=new Float64Array(4)
x[3]=1
return new A.mn(x)},
mn:function mn(d){this.a=d}},B,C
A=a.updateHolder(c[13],A)
B=c[0]
C=c[2]
A.lv.prototype={
d6(d){return B.XW(this.a,this.b,d)}}
A.nw.prototype={
d6(d){var x=B.qk(this.a,this.b,d)
x.toString
return x}}
A.hc.prototype={
d6(d){var x=B.fi(this.a,this.b,d)
x.toString
return x}}
A.oz.prototype={
d6(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.dn(new Float64Array(3)),a3=new B.dn(new Float64Array(3)),a4=A.awt(),a5=A.awt(),a6=new B.dn(new Float64Array(3)),a7=new B.dn(new Float64Array(3))
this.a.Kq(a2,a4,a6)
this.b.Kq(a3,a5,a7)
x=1-a8
w=a2.iu(x).V(0,a3.iu(a8))
v=a4.iu(x).V(0,a5.iu(a8))
u=new Float64Array(4)
t=new A.mn(u)
t.aI(v)
t.Bx(0)
s=a6.iu(x).V(0,a7.iu(a8))
x=new Float64Array(16)
v=new B.at(x)
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
v.b1(0,s)
return v}}
A.vN.prototype={
a5(){return new A.Q4(null,null,C.k)}}
A.Q4.prototype={
lq(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.agn()))
s=u.cx
u.a.toString
w=y.f
u.cx=w.a(d.$3(s,t,new A.ago()))
s=y.d
u.cy=s.a(d.$3(u.cy,u.a.y,new A.agp()))
v=u.db
u.a.toString
u.db=s.a(d.$3(v,t,new A.agq()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.agr()))
v=u.dy
u.a.toString
u.dy=w.a(d.$3(v,t,new A.ags()))
v=u.fr
u.a.toString
u.fr=y.w.a(d.$3(v,t,new A.agt()))
v=u.fx
u.a.toString
u.fx=x.a(d.$3(v,t,new A.agu()))},
E(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.gf9(),n=q.CW
n=n==null?p:n.a2(0,o.gn(o))
x=q.cx
x=x==null?p:x.a2(0,o.gn(o))
w=q.cy
w=w==null?p:w.a2(0,o.gn(o))
v=q.db
v=v==null?p:v.a2(0,o.gn(o))
u=q.dx
u=u==null?p:u.a2(0,o.gn(o))
t=q.dy
t=t==null?p:t.a2(0,o.gn(o))
s=q.fr
s=s==null?p:s.a2(0,o.gn(o))
r=q.fx
r=r==null?p:r.a2(0,o.gn(o))
return B.bv(n,q.a.r,C.n,p,u,w,v,p,t,x,s,r,p)}}
A.mn.prototype={
aI(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
P3(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
Bx(d){var x,w,v=Math.sqrt(this.gj9())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gj9(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gq(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
iu(d){var x=new Float64Array(4),w=new A.mn(x)
w.aI(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
R(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gabV(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
h=C.e.R(g,a4)
x=C.e.R(d,a1)
w=C.e.R(e,a2)
v=C.e.R(f,a3)
u=C.e.R(g,a3)
t=C.e.R(e,a1)
s=C.e.R(f,a4)
r=C.e.R(d,a2)
q=C.e.R(g,a2)
p=C.e.R(f,a1)
o=C.e.R(d,a3)
n=C.e.R(e,a4)
m=C.e.R(g,a1)
l=C.e.R(d,a4)
k=C.e.R(e,a3)
j=C.e.R(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.mn(i)},
V(d,e){var x,w=new Float64Array(4),v=new A.mn(w)
v.aI(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
aa(d,e){var x,w=new Float64Array(4),v=new A.mn(w)
v.aI(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
l(d,e,f){this.a[e]=f},
i(d){var x=this.a
return B.d(x[0])+", "+B.d(x[1])+", "+B.d(x[2])+" @ "+B.d(x[3])}}
var z=a.updateTypes(["lv(@)","hc(@)","nw(@)","oz(@)"])
A.agn.prototype={
$1(d){return new A.lv(y.k.a(d),null)},
$S:z+0}
A.ago.prototype={
$1(d){return new A.hc(y.m.a(d),null)},
$S:z+1}
A.agp.prototype={
$1(d){return new B.hV(y.r.a(d),null)},
$S:141}
A.agq.prototype={
$1(d){return new B.hV(y.r.a(d),null)},
$S:141}
A.agr.prototype={
$1(d){return new A.nw(y.a.a(d),null)},
$S:z+2}
A.ags.prototype={
$1(d){return new A.hc(y.m.a(d),null)},
$S:z+1}
A.agt.prototype={
$1(d){return new A.oz(y.E.a(d),null)},
$S:z+3}
A.agu.prototype={
$1(d){return new A.lv(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.an,[A.lv,A.nw,A.hc,A.oz])
w(A.vN,B.rm)
w(A.Q4,B.lw)
x(B.bA,[A.agn,A.ago,A.agp,A.agq,A.agr,A.ags,A.agt,A.agu])
w(A.mn,B.D)})()
B.e6(b.typeUniverse,JSON.parse('{"lv":{"an":["h7?"],"ae":["h7?"],"an.T":"h7?","ae.T":"h7?"},"nw":{"an":["aj"],"ae":["aj"],"an.T":"aj","ae.T":"aj"},"hc":{"an":["cF"],"ae":["cF"],"an.T":"cF","ae.T":"cF"},"oz":{"an":["at"],"ae":["at"],"an.T":"at","ae.T":"at"},"vN":{"P":[],"h":[]},"Q4":{"Z":["vN"]}}'))
var y=(function rtii(){var x=B.N
return{k:x("h7"),a:x("aj"),r:x("fG"),m:x("cF"),E:x("at"),b:x("lv?"),e:x("nw?"),d:x("hV?"),f:x("hc?"),w:x("oz?")}})()}
$__dart_deferred_initializers__["Acg4dTULs9u3kFL0kk+RYhcd0QI="] = $__dart_deferred_initializers__.current
