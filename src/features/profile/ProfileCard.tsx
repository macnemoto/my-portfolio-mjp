import InfoItem from '../../components/InfoItem';
import NetworksIcon from '../../components/NetworksIcon';
import { MapPin, Phone, Mail } from 'lucide-react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types/profile.types';
import AnimatedSection from '../../components/AnimatedSection';

const profile: ProfileData = profileData;

function ProfileCard() {
    return (
        <AnimatedSection>
            <div className="bg-primary-color rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
                {/* Cover/Header */}
                <div className="h-20 bg-gradient-to-br from-yellow-500/20 via-yellow-600/10 to-transparent relative">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                </div>
                
                {/* Profile Content */}
                <div className="px-4 pb-5 -mt-12">
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                        {/* Avatar */}
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-2xl bg-secondary-color border-4 border-primary-color overflow-hidden shadow-lg">
                                <img 
                                    className='w-full h-full object-cover' 
                                    src={profile.avatar} 
                                    alt={`${profile.name} avatar`} 
                                    loading="eager"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-primary-color" title="Available for work"></div>
                        </div>
                        
                        {/* Name & Title */}
                        <div className="text-center sm:text-left flex-1 pt-1">
                            <h2 className='text-xl font-bold text-white'>{profile.name}</h2>
                            <p className="text-yellow-400/90 text-sm font-medium">{profile.title}</p>
                        </div>
                    </div>
                    
                    <hr className="h-px border-zinc-700/50 my-4"></hr>
                    
                    {/* Contact Info */}
                    <div className='space-y-3'>
                        <InfoItem title={'EMAIL'} value={profile.email} icon={Mail} />
                        <InfoItem title={'PHONE'} value={profile.phone} icon={Phone} />
                        <InfoItem title={'LOCATION'} value={profile.location} icon={MapPin} />
                    </div>
                    
                    <hr className="h-px border-zinc-700/50 my-4"></hr>
                    
                    {/* Social Links */}
                    <ul className='flex gap-3 justify-center sm:justify-start'>
                        <li>
                            <NetworksIcon icon={FaLinkedin} href={profile.social.linkedin} />
                        </li>
                        <li>
                            <NetworksIcon icon={FaGithub} href={profile.social.github} />
                        </li>
                        <li>
                            <NetworksIcon icon={MdOutgoingMail} href={profile.social.email} size='text-2xl' />
                        </li>
                    </ul>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default ProfileCard;