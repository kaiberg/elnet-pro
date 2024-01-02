'use server'

import {cookies, headers} from "next/headers";
import {cache} from "react"
import {Delay} from "@/Helpers/Networking/Delay";
import {OperationalStatus, Park} from "@/UI/Components/Parks/ParksTypes";
import {revalidatePath} from "next/cache";

const parks: Park[] = [
    {
        id: '1',
        name: 'Sunshine Valley Solar Park',
        description: 'A sprawling solar park harnessing sunlight to generate renewable energy.',
        status: OperationalStatus.Operational,
    },
    {
        id: '2',
        name: 'Photon Fields Solar Farm',
        description: 'Utilizing advanced solar cell technology to power nearby communities.',
        status: OperationalStatus.Operational,
    },
    {
        id: '3',
        name: 'Solaris Heights Renewable Park',
        description: 'Innovative park combining green spaces with solar power generation.',
        status: OperationalStatus.Operational,
    },
    {
        id: '4',
        name: 'EcoSun Gardens Solar Array',
        description: 'Creating sustainable energy through extensive solar cell installations.',
        status: OperationalStatus.Warning,
    },
    {
        id: '5',
        name: 'Radiant Meadows Solar Project',
        description: 'Focused on harnessing solar energy for local grid integration.',
        status: OperationalStatus.Operational,
    },
    {
        id: '6',
        name: 'Sunny Trails Solar Initiative',
        description: 'Promoting eco-friendly practices through solar-powered amenities.',
        status: OperationalStatus.Operational,
    },
    {
        id: '7',
        name: 'Solar Vista Innovation Park',
        description: 'Exploring cutting-edge solar technologies for sustainable energy.',
        status: OperationalStatus.Operational,
    },
    {
        id: '8',
        name: 'Sunbeam Valley Solar Center',
        description: 'Providing clean and efficient energy solutions using solar cells.',
        status: OperationalStatus.Error,
    },
    {
        id: '9',
        name: 'SolarPeak Eco-Park',
        description: 'Showcasing the benefits of solar power in an educational setting.',
        status: OperationalStatus.Operational,
    },
    {
        id: '10',
        name: 'SunScape Renewable Gardens',
        description: 'Blending natural landscapes with state-of-the-art solar technology.',
        status: OperationalStatus.Operational,
    },
    {
        id: '11',
        name: 'Solar Haven Park',
        description: 'A relaxing park with integrated solar panels powering its facilities.',
        status: OperationalStatus.Operational,
    },
    {
        id: '12',
        name: 'Sunburst Fields Solar Reserve',
        description: 'Focused on sustainable energy production using solar arrays.',
        status: OperationalStatus.Operational,
    },
    {
        id: '13',
        name: 'SolarGrove Oasis',
        description: 'Combining shaded areas with solar power generation for visitors.',
        status: OperationalStatus.Warning,
    },
    {
        id: '14',
        name: 'SunRise Commons Solar Hub',
        description: 'Community-focused park generating clean energy through solar tech.',
        status: OperationalStatus.Operational,
    },
    {
        id: '15',
        name: 'SolarZen Park',
        description: 'Offering serene spaces powered by solar energy for relaxation.',
        status: OperationalStatus.Operational,
    },
    {
        id: '16',
        name: 'EcoSolar Meadows',
        description: 'Dedicated to eco-friendly practices, emphasizing solar power.',
        status: OperationalStatus.Operational,
    },
    {
        id: '17',
        name: 'Sunset Horizon Solar Enclave',
        description: 'Maximizing solar energy utilization for an eco-conscious community.',
        status: OperationalStatus.Warning,
    },
    {
        id: '18',
        name: 'SolarVista Parkland',
        description: 'A scenic parkland with integrated solar panels for energy needs.',
        status: OperationalStatus.Operational,
    },
    {
        id: '19',
        name: 'SolarScape Gardens',
        description: 'Artfully combining greenery with solar infrastructure for sustainability.',
        status: OperationalStatus.Operational,
    },
    {
        id: '20',
        name: 'Luminous Meadows Solar Fields',
        description: 'Dedicated to advancing solar energy for a sustainable future.',
        status: OperationalStatus.Operational,
    },
]

export async function refreshParkData() {
    const headersList = headers();
    const path = headersList.get('Next-Url');
    if(path) {
        revalidatePath(path, 'page');
        console.log(`reavalidated park with path ${path}`);
    }
}

export async function getLatestParks() {
    await Delay(5 * 1000);
    //fetch revalidate 10mins

    return parks.slice(-5);
}

export async function getParks() {
    await Delay(5 * 1000);
    //fetch revalidate 10mins

    return parks;
}

async function getUserDetails() {
    const token = cookies().get('token')?.value
    return getUser(token);
}

const getUser = cache(async (token : string | undefined) => {
    if(typeof token !== "string")
        return undefined;

    // return  response = await fetch({}, '')
    return "";
})

export default getUserDetails;