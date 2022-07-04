import { CardContent, Typography, CardActionArea } from '@mui/material'
import { CompanyCard, CardHead } from '../Helper/styles'
import data from '../data/data.json'

const DescriptionCard = () => {
    //console.log('data', data.elementsName)
    return (
        <CompanyCard>
            <CardHead title={' ... '} />
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="body2" color="text.secondary">{data.elementsName[4].label}</Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">{data.elementsName[5].label}</Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">{data.elementsName[6].label}</Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">{data.elementsName[7].label}</Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">{data.elementsName[8].label}</Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">{data.elementsName[9].label}</Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">{data.elementsName[10].label}</Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">{data.elementsName[12].label}</Typography>
                </CardContent>
            </CardActionArea>
        </CompanyCard>
    )
}

export default DescriptionCard