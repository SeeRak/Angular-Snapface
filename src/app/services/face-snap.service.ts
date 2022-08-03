import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: "root"
})
export class FaceSnapService {
    faceSnaps : FaceSnap[] = [
        {
          id: 1,
          title: 'My Snap',
          description: 'This is my snap',
          imageUrl: 'https://picsum.photos/200/300',
          createdDate: new Date(),
          snaps: 140,
          location: 'San Francisco'
        },
        {
          id: 2,
          title: 'My Other Snap',
          description: 'This is my other snap',
          imageUrl: 'https://picsum.photos/200/300',
          createdDate: new Date(),
          snaps: 0,
          location: 'San Francisco'
        },
        {
          id: 3,
          title: 'My Last Snap',
          description: 'This is my last snap',
          imageUrl: 'https://picsum.photos/200/300',
          createdDate: new Date(),
          snaps: 0,  
        }  
      ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id == faceSnapId);
        if(faceSnap){
            return faceSnap;
        }else{
            throw new Error('FaceSnap not found');
        }    
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}