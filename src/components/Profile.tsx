import ProfileProps from '../interfaces/ProfileProps';
import profile_image from '../assets/profile_image.png'


export default function Profile({ profileName, profileLink }: ProfileProps) {
    return (<div className="px-4  text-center">
        <img src={profile_image} className="rounded-circle mb-3" alt="..." />
        <h6>{profileName}</h6>
        <h6 className="fw-medium mt-4 mb-5 primary-color">My Profile</h6>
        <hr className="dropdown-divider mb-5"></hr>
    </div>)
}