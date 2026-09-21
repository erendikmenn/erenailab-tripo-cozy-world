import * as T from 'three';
export const RADIUS=72,BOUNDARY=27;
export function height(x:number,z:number){return Math.sqrt(Math.max(0,RADIUS*RADIUS-x*x-z*z))-RADIUS}
export function normal(x:number,z:number){return new T.Vector3(x,height(x,z)+RADIUS,z).normalize()}
export function movement(x:number,z:number,yaw:number){const len=Math.hypot(x,z);if(!len)return{x:0,z:0};x/=len;z/=len;return{x:x*Math.cos(yaw)+z*Math.sin(yaw),z:-x*Math.sin(yaw)+z*Math.cos(yaw)}}
export function jumpStep(y:number,v:number,grounded:boolean,request:boolean,dt:number){if(request&&grounded){v=5.4;grounded=false}if(!grounded){v-=15*dt;y+=v*dt;if(y<=0){y=0;v=0;grounded=true}}return{y,v,grounded}}
export function removeRootMotion(source:T.AnimationClip,rootRest=new T.Vector3()){const clip=source.clone();for(const t of clip.tracks){if(/(?:hips|root)\.position$/i.test(t.name))for(let i=0;i<t.values.length;i+=3)rootRest.toArray(t.values,i)}return clip}

// Dampen only outward travel near the visible shrub belt; inward/tangent input stays responsive.
export function boundaryStep(x:number,z:number,dx:number,dz:number){const radius=Math.hypot(x,z);if(radius>BOUNDARY-2){const nx=x/radius,nz=z/radius,outward=dx*nx+dz*nz;if(outward>0){const factor=Math.max(0,Math.min(1,(BOUNDARY-radius)/2));dx-=nx*outward*(1-factor);dz-=nz*outward*(1-factor)}}let px=x+dx,pz=z+dz;const next=Math.hypot(px,pz);if(next>BOUNDARY){px*=BOUNDARY/next;pz*=BOUNDARY/next}return{x:px,z:pz}}
export function cameraClearance(desired:number,hitDistance?:number){return hitDistance===undefined?desired:Math.max(.02,Math.min(desired,hitDistance-.25))}
