import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TrainerService {
    private registry = signal([
    {    
        photo: 'roxanne.png',
        name: 'Roxanne',
        badge: 'Stone Badge',
        team: 'Geodude (Lv. 14), Nosepass (Lv. 15)',
        town: 'Rustboro City',
        specialty: 'Rock Type'
    },
       {   
        photo: 'brawly.png', 
        name: 'Brawly',
        badge: 'Knuckle Badge',
        team: 'Machop (Lv. 17), Makuhita (Lv. 18)',
        town: 'Dewford Town',
        specialty: 'Fighting Type'
    },
       {    
        photo: 'wattson.png',
        name: 'Wattson',
        badge: 'Dynamo Badge',
        team: 'Magnemite (Lv. 22), Voltorb (Lv. 20), Magneton (Lv. 23)',
        town: 'Mauville City',
        specialty: 'Electric Type'
    },
       {    
        photo: 'flannery.png',
        name: 'Flannery',
        badge: 'Heat Badge',
        team: 'Slugma (Lv. 26), Slugma (Lv. 26), Torkoal (Lv. 28)',
        town: 'Lavaridge City',
        specialty: 'Fire Type'
    },
       {    
        photo: 'norman.png',
        name: 'Norman',
        badge: 'Balance Badge',
        team: 'Slaking (Lv. 28), Vigoroth (Lv. 30), Slaking (Lv. 31)',
        town: 'Petalburg City',
        specialty: 'Normal Type'
    },
       {    
        photo: 'winona.png',
        name: 'Winona',
        badge: 'Feather Badge',
        team: 'Swellow (Lv. 31), Pelipper (Lv. 30), Skarmory (Lv. 32), Altaria (Lv. 33)',
        town: 'Fortree City',
        specialty: 'Flying Type'
    },
       {    
        photo: 'tate-liza.png',
        name: 'Tate & Liza',
        badge: 'Mind Badge',
        team: 'Lunatone (Lv. 42), Solrock (Lv. 42)',
        town: 'Mossdeep City',
        specialty: 'Psychic Type'
    },
    {    
        photo: 'wallace.png',
        name: 'Wallace',
        badge: 'Rain Badge',
        team: 'Luvdisc (Lv. 40), Whiscash (Lv. 42), Sealeo (Lv. 40), Seaking (Lv. 42), Milotic (Lv. 43)',
        town: 'Sootopolis City',
        specialty: 'Water Type'
    }
    ]);

    trainers = this.registry.asReadonly();

}
