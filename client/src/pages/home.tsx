
import { useList } from "@pankod/refine-core"
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from "components"
import { Typography, Stack, Box } from "@pankod/refine-mui"

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}> 
        <PieChart 
          title="Properties for Sale"
          value={684}
          series={[75,25]}
          colors={["#0069B0", "#95D3FC"]}
          />
          <PieChart 
          title="Properties for Rent"
          value={550}
          series={[60,40 ]}
          colors={["#0069B0", "#95D3FC"]}
          />
          <PieChart 
          title="Total Customers"
          value={5684}
          series={[75,25]}
          colors={["#0069B0", "#95D3FC"]}
          />
          <PieChart 
          title="Properties for Cities"
          value={555}
          series={[75,25]}
          colors={["#0069B0", "#95D3FC"]}
          />
      </Box>

      <Stack mt='25px' width='100%' direction={{xs:'column', lg:'row'}} gap={4}>
        <TotalRevenue/>
        <PropertyReferrals/>
      </Stack>



    </Box>
  )
}

export default Home