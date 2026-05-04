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
            <div className="bg-card rounded-xl overflow-hidden border border-primary shadow-card transition-colors duration-400">
                {/* Cover */}
                <div className="h-20 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent relative">
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--accent)_1px,_transparent_1px)] [background-size:16px_16px]"></div>
                </div>
                
                {/* Profile Content */}
                <div className="px-4 pb-5 -mt-12">
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                        {/* Avatar */}
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-xl bg-surface border-4 border-card overflow-hidden shadow-lg transition-colors duration-400">
                                <img 
                                    className='w-full h-full object-cover' 
                                    src={profile.avatar} 
                                    alt={`${profile.name} avatar`} 
                                    loading="eager"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card" title="Available for work"></div>
                        </div>
                        
                        {/* Name & Title */}
                        <div className="text-center sm:text-left flex-1 pt-1">
                            <h2 className='text-xl font-bold text-primary'>{profile.name}</h2>
                            <p className="text-accent/90 text-sm font-medium">{profile.title}</p>
                        </div>
                    </div>
                    
                    <hr className="h-px border-secondary my-4"></hr>
                    
                    {/* Contact Info */}
                    <div className='space-y-3'>
                        <InfoItem title={'EMAIL'} value={profile.email} icon={Mail} />
                        <InfoItem title={'PHONE'} value={profile.phone} icon={Phone} />
                        <InfoItem title={'LOCATION'} value={profile.location} icon={MapPin} />
                    </div>
                    
                    <hr className="h-px border-secondary my-4"></hr>
                    
                    {/* Social Links */}
                    <ul className='flex gap-2 justify-center sm:justify-start'>
                        <li><NetworksIcon icon={FaLinkedin} href={profile.social.linkedin} /></li>
                        <li><NetworksIcon icon={FaGithub} href={profile.social.github} /></li>
                        <li><NetworksIcon icon={MdOutgoingMail} href={profile.social.email} size='text-xl' /></li>
                    </ul>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default ProfileCard;