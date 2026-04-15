import InfoItem from '../../components/InfoItem';
import NetworksIcon from '../../components/NetworksIcon';
import { MapPin, Phone, Mail } from 'lucide-react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const avatar = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
const name = "Marcos Pirela"
const description = "Software Developer"


function ProfileCard() {
    return (
        <div className="bg-primary-color rounded-lg p-4 flex flex-col gap-1 mb-5">
            <div className="bg-primary-color rounded-lg p-4 flex flex-row gap-5">
                <div className="flex items-center justify-center h-24 bg-secondary-color rounded-lg">
                    <img className='w-20 h-20' src={avatar} alt="avatar" />
                </div>
                <div>
                    <h2 className='mb-2'>{name}</h2>
                    <div className="flex items-center justify-center w-full py-1 pl-1 pr-1 bg-secondary-color rounded-lg text-xs">
                        <p className=''>{description}</p>
                    </div>
                </div>
            </div>
            <hr className={`h-px border-secondary-color border-spacing-1 my-3`}></hr>
            <div className='flex flex-col gap-4'>
                <InfoItem title={'EMAIL'} value={'marcospirela215@gmail.com'} icon={Mail} />
                <InfoItem title={'PHONE'} value={'(+58) 414-9600196'} icon={Phone} />
                <InfoItem title={'LOCATION'} value={'Venezuela, Zulia'} icon={MapPin} />
            </div>
            <hr className={`h-px border-secondary-color border-spacing-1 my-3`}></hr>
            <ul className='flex gap-3 justify-start items-center'>
                <li> <NetworksIcon icon={FaLinkedin} href={'https://www.linkedin.com/in/marcos-pirela-dev/'} /></li>
                <li> <NetworksIcon icon={FaGithub} href={'https://github.com/macnemoto'} /></li>
                <li> <NetworksIcon icon={MdOutgoingMail} href={'mailto:Marcos%20Pirela%20<marcospirela215@gmail.com>?subject=Contacto desde el Portfolio'} size='text-3xl' /></li>
            </ul>
        </div>
    );
}

export default ProfileCard;