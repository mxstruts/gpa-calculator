import {
    AiOutlineFacebook,
    AiOutlineGithub,
    AiOutlineInstagram,
} from 'react-icons/ai'
import Link from 'next/link'

function Footer(props) {
    return (
        <div className="flex h-[10vh] items-center justify-center space-x-7">
            <Link href="https://www.instagram.com/mxstruts/">
                <a target="_blank">
                    <AiOutlineInstagram className="h-8 w-8 cursor-pointer" />
                </a>
            </Link>
            <Link href="https://www.facebook.com/StClairCollege/">
                <a target="_blank">
                    <AiOutlineFacebook className="h-8 w-8 cursor-pointer" />
                </a>
            </Link>
            <Link href="https://github.com/mxstruts">
                <a target="_blank">
                    <AiOutlineGithub className="h-8 w-8 cursor-pointer" />
                </a>
            </Link>
        </div>
    )
}

export default Footer
