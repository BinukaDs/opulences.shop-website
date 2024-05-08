import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from "../ui/card"
import Image from "next/image"

const CardComponent = ({title, description, href}:any) => {
    return (
        <Card className="bg-foreground border-none text-white rounded-3xl p-3 ">
            <CardHeader>
                <Image src={href} alt="web icon" width={30} height={30} />
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">{title}</p>
                <p className="mt-3 text-textGray">{description}</p>
            </CardContent>
        </Card>

    )
}

export default CardComponent