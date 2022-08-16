import Userfront from "@userfront/core";
Userfront.init("8b68mprb");

export default function plantWatered (plant=null, newWateredDate=null) {
    let userPlants = Userfront.user.data.userPlants
    console.log('in plantWatered?')
    if (userPlants.length > 0) {
        for (let i=0; i < userPlants; i++) {
            if (userPlants[i].plantName === plant.plantName) {
                userPlants[i].wateredLast = newWateredDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    weekday: 'short',
                })
                console.log(`plant found? ${Userfront.user.data}`);
                break;
            }
        }; 
        console.log('here???3')
    }
    Userfront.user.update({
        data: {
            userPlants: userPlants
        }
    });
};

export function addPlantToUserfront(plant) {
    const d = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
    })
    plant.wateredLast = d
    let userPlants = Userfront.user.data.userPlants
    userPlants.push(plant)
    Userfront.user.update({
        data: {
            userPlants: userPlants
        }
    });
    console.log(Userfront.user.name);
}