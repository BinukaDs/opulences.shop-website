
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from "../ui/card"
import Image from "next/image"
import FadeIn from "@/app/transitions/fadein"

const CardComponent = ({ title, description, href }: any) => {
    return (
        <FadeIn>
            <Card className="bg-foreground border border-border text-white rounded-3xl p-3 ">
                <CardHeader>
                    <Image src={href} alt="web icon" width={30} height={30} />
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">{title}</p>
                    <p className="mt-3 text-textGray">{description}</p>
                </CardContent>
            </Card>
        </FadeIn>


    )
}

export default CardComponent