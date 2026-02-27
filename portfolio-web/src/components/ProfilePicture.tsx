interface ProfilePicture {
    size: 'sm' | 'md' | 'lg';
}

const sizeMap = {
    sm: 'h-30 w-30',
    md: 'h-48 w-48',
    lg: 'h-72 w-72'
}
export default function ProfilePicture({ size }: ProfilePicture) {
    return (
        <div className={`${sizeMap[size]} flex justify-center items-center rounded-full bg-linear-to-b from-purple-200 to-green-200`}>
            <img
                src='./public/profile-picture.jpg'
                alt='Developer Profile Picture'
                className={`size-9/10 object-fit rounded-full`}
            />
        </div>
    );
}