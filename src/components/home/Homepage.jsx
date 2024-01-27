import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ColumnCard = ({ to, title1, title2, imageUrl }) => (
  <Card sx={{ width: 150, border: '1px solid black', boxShadow: 3,  height:65 }}>
   <CardContent style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between' }}>
  <Link to={to} style={{ textDecoration: 'none', color: 'black' }}>
    <div>
      <Typography variant="body2" noWrap>
        {title1}
      </Typography>
      <Typography variant="body2" noWrap>
        {title2}
      </Typography>
    </div>
  </Link>
  <img
    alt={title1}
    src={imageUrl}
    style={{ height: 40, objectFit: 'cover', width: '40%' }}
  />
</CardContent>

  </Card>
);
const ProductCard = ({ productName, price, starRating, imageUrl }) => (
  <Card sx={{ width: 150, border: '1px solid black', boxShadow: 3, height: 250 }}>
    <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="body2" noWrap>
        {productName}
      </Typography>
      <img
        alt={productName}
        src={imageUrl}
        style={{ height: 80, objectFit: 'cover', width: '80%', marginTop: 10 }}
      />
      <Typography variant="body2" noWrap style={{ marginTop: 5 }}>
        {/* {productName} */}
      </Typography>
      <Typography variant="body2" noWrap style={{ marginTop: 5, fontWeight: 'bold' }}>
        Price: ₹{price}
      </Typography>
      <Rating name="read-only" value={starRating} readOnly style={{ marginTop: 5 }} />
    </CardContent>
  </Card>
);

const ProductSection = ({ sectionTitle, products }) => (
  <React.Fragment>
   
    <Typography variant="body1" align="center" style={{ marginTop: '10px', color: 'black', textAlign: 'left' }}>
      {sectionTitle}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 3 }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          productName={product.productName}
          price={product.price}
          starRating={product.starRating}
          imageUrl={product.imageUrl}
        />
      ))}
    </Box>
    <br></br>
    <div style={{ backgroundColor: 'black', height: '1px' }} />
  </React.Fragment>
);
export default function HomePage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [bottomNavValue, setBottomNavValue] = React.useState(0);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleOpenMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    handleCloseMenu();
    navigate('/profile');
  };

  const handleMyAccountClick = () => {
    handleCloseMenu();
    navigate('/account');
  };

  const handleAddAccountClick = () => {
    // Implement functionality for adding another account
  };

  const handleLogout = () => {
    // Implement functionality for logout
    navigate('/');
  };
    const buildings = [
    {productName: 'Brick Making Machines', price: 45000, starRating: 4, imageUrl: 'https://5.imimg.com/data5/GLADMIN/Default/2022/7/YO/YW/JG/90525/fly-ash-brick-making-machine-250x250.jpg' },
    { productName: 'TMT Bars', price: 200, starRating: 4.5, imageUrl: 'https://5.imimg.com/data5/PO/QS/FA/SELLER-397513/tmt-bar-1000x1000.png'},
    { productName: 'Plywoods',  price: 1500, starRating: 3,imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41R7uJA7rYL._SY300_SX300_QL70_FMwebp_.jpg' },
    { productName: 'Wooden Door',price: 10000, starRating: 4, imageUrl: 'https://5.imimg.com/data5/YJ/DU/MY-8045192/coated-wooden-door-500x500.jpg' },
    { productName: 'Emulsion Paints',price: 599, starRating: 4, imageUrl: 'https://img2.exportersindia.com/product_images/bc-small/2023/11/4124436/plastic-emulsion-paints-2852364.jpg' },
    { productName: 'PVC Pipes',price: 250, starRating: 5, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/8/GL/AH/BW/9380720/pvc-pipe-500x500.jpg' },
    // Add more machines as needed
  ];
  const industrialMachines = [
    {productName: 'Submersible pumps', price: 4500, starRating: 4.5, imageUrl: 'https://3.imimg.com/data3/HP/TA/GLADMIN-7040/submersible-pumpsets-250x250.jpg' },
    { productName: 'CNC ', price: 120000, starRating: 5, imageUrl: 'https://4.imimg.com/data4/EJ/BH/MY-705452/cnc-milling-machine-500x500.jpg'},
    {productName: 'industrial heaters', price: 12500, starRating: 3, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2020/9/UT/AS/QA/3676000/industrial-heater-and-heating-coil-500x500.jpg' },
    { productName: 'furnace', price: 12000, starRating: 3, imageUrl: 'https://www.jrfurnace.net/wp-content/uploads/2020/10/Pit-Furnaces.jpg'},
    {productName: 'vacuum cleaner', price: 1500, starRating: 4, imageUrl:'https://5.imimg.com/data5/SELLER/Default/2023/7/321803719/UF/TR/TI/32039771/industrial-vacuum-cleaner-500x500.png' },
    { productName: 'forklifts', price: 67000, starRating: 3, imageUrl: 'https://nichiyu.in/images/NichiyuTrucks.png'},
    
    // Add more machines as needed
  ];

  const industrialSupplies = [
      {productName: 'Oils', price: 699, starRating: 4, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/8/336211144/HO/VA/QW/30968396/industrial-oils-500x500.jpeg' },
    { productName: 'Storage Tanks', price: 58000, starRating: 4, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/5/IF/FO/RZ/6738052/diesel-underground-storage-tank-500x500.jpg'},
      {productName: 'Filters', price: 467, starRating: 4.5, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353668484/UZ/BH/AH/616583/industrial-filters-500x500.jpeg' },
    { productName: 'Rubber', price: 299, starRating: 3.8, imageUrl: 'https://www.industrialrubbergoods.com/images/industrial-rubber-good.jpg'},
      {productName: 'Hydraluic Jacks', price: 4530, starRating: 4.5, imageUrl: 'https://5.imimg.com/data5/KB/PH/MY-2896581/hydraulic-jack-500x500.jpg' },
    { productName: 'flange', price: 760, starRating: 4, imageUrl: 'https://5.imimg.com/data5/GR/HW/MY-21573024/stainless-steel-316l-long-weld-neck-flanges-250x250.jpg'},
  ];

  const electricalElectronics = [
      {productName: 'alternators', price: 1500, starRating: 4.5, imageUrl: 'https://4.imimg.com/data4/FU/EN/MY-4236569/indica-regulator-500x500.jpg' },
    { productName: 'generator', price: 1200, starRating: 3.8, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/11/359153466/OH/ZB/LH/9560319/eu30is-250x250.jpg'},
      {productName: 'transformer', price: 1500, starRating: 4.5, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2020/12/JY/AI/AT/29268932/high-power-transformer-500x500.jpg' },
    { productName: 'motor', price: 1200, starRating: 3.8, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/7/321657074/QD/RU/NJ/24648504/transtorque-electric-motors-1000x1000.JPG'},
      {productName: 'circuit breaker', price: 1500, starRating: 4.5, imageUrl: 'https://5.imimg.com/data5/YE/IC/MY-1208659/outdoor-sf6-circuit-breaker-500x500.jpg' },
    { productName: 'isolator', price: 1200, starRating: 3.8, imageUrl: 'https://4.imimg.com/data4/AF/VR/MY-6256485/solid-core-rotating-isolator-500x500.jpg'},
    // Add more electronics as needed
  ];

  const foodFactory = [
        {productName: 'Flour Kneading', price: 1500, starRating: 4.5, imageUrl: 'https://5.imimg.com/data5/PJ/OE/DZ/SELLER-10915778/25-kg-commercial-dough-kneader-machine-500x500.jpg' },
    { productName: 'Peeler', price: 1200, starRating: 3.8, imageUrl: 'https://5.imimg.com/data5/XD/OL/MY-12995/universal-peeler-for-large-scale-processing-kronen-500x500.jpeg'},
  
        {productName: 'Grinders', price: 1500, starRating: 4.5, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/1/XQ/XO/YM/694891/food-grinder-machine-500x500.jpeg' },
    { productName: 'Oil Extraction Machines', price: 1200, starRating: 3.8, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/8/332392035/GN/LX/OZ/688876/oil-extraction-machine-in-bangalore-500x500.jpg'},

        {productName: 'Meat Cutter', price: 1500, starRating: 4.5, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/3/SW/TM/QI/42177573/meat-chopper-cutter-500x500.jpg' },
    { productName: 'Mixer Blender', price: 1200, starRating: 3.8, imageUrl: 'https://5.imimg.com/data5/DC/VP/ZS/SELLER-13069892/commercial-blender-500x500.jpeg'},
    // Add more food items as needed
  ];

  const agriculture = [
{productName: 'Cultipacker', price: 1500, starRating: 2, imageUrl: 'https://5.imimg.com/data5/UJ/IC/DS/SELLER-79101850/itci-type-agricultural-cultivator-500x500.jpg' },
    { productName: 'Cultivator', price: 1200, starRating: 3.8, imageUrl: 'https://2.imimg.com/data2/UN/CA/MY-148883/cultipacker-hc-606-250x250.jpg'},
{productName: 'Harrow', price: 1500, starRating: 4.5, imageUrl: 'https://5.imimg.com/data5/DX/YO/QS/SELLER-512708/trailed-offset-disc-harrow-500x500.jpg' },
    { productName: 'Land imprinter', price: 1200, starRating: 3.8, imageUrl: 'https://2.imimg.com/data2/PY/MF/MY-4227106/consultation-visit-services-500x500.jpg'},
{productName: 'Roller', price: 1500, starRating: 4.5, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/8/GI/GT/OZ/5864137/return-roller-500x500.jpeg' },
    { productName: 'Strip till ', price: 1200, starRating: 3.8, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/9/342024423/LT/UT/XU/144403380/strip-till-seed-drill-500x500.jpeg'},
    // Add more agriculture tools as needed
  ];
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    textDecoration: 'none'
  };
  
  const innerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  };
  
  const footerSectionStyle = {
    flex: '1',
    margin: '10px',
  };
  
  const socialIconsStyle = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  };
  
  const iconStyle = {
    width: '30px',
    height: '30px',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black',height:'70px ' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white' }}
          >
            ProductGo
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="profile"
            onClick={handleClick}
            sx={{ ml: 2 }}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleProfileClick}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <AccountCircleIcon sx={{ marginRight: 1 }} />
              Profile
            </MenuItem>
            <MenuItem
              onClick={handleMyAccountClick}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <LockOpenIcon sx={{ marginRight: 1 }} />
              My account
            </MenuItem>
            <MenuItem
              onClick={handleAddAccountClick}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <PersonAddIcon sx={{ marginRight: 1 }} />
              Add another account
            </MenuItem>
            <MenuItem
              onClick={() => navigate('/settings')}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <SettingsIcon sx={{ marginRight: 1 }} />
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <FilterListIcon sx={{ fontSize: "16px" }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="filter"
          >
            <FilterListIcon />
          </IconButton>
        </Toolbar>
       </AppBar>

   <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 3 }}>
        <ColumnCard to="Buildings" title1="Building &" title2="Construction" imageUrl="https://cdn-icons-png.flaticon.com/512/4423/4423859.png" />
        <ColumnCard to="industryMachinery" title1="Industry" title2="Machinery" imageUrl="https://png.pngtree.com/png-vector/20211012/ourlarge/pngtree-factory-machinery-operation-cartoon-png-image_3969194.png" />
        <ColumnCard to="industrySuplly" title1="Industrial" title2="Supplies" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-ep_0jiEUYlKRsNfqC-O1UQV-6vVbH3X9w&usqp=CAU" />
        <ColumnCard to="electronics" title1="Electrical &" title2="Electronic" imageUrl="https://cdn5.vectorstock.com/i/1000x1000/38/49/electric-motor-icon-cartoon-style-vector-12883849.jpg" />
        <ColumnCard to="food" title1="Food &" title2="Factory" imageUrl="https://img.freepik.com/free-vector/meat-processing-plant-flat-illsutration-worker-uniform-making-meat-products_1284-58410.jpg" />
        <ColumnCard to="agriculture" title1="Agriculture" title2="Machinery" imageUrl="https://i.pinimg.com/736x/ae/ba/3c/aeba3c0ca7666facf1d7f01c6fe69e6b.jpg" />

        
      </Box>
      <br></br>
  <div style={{ backgroundColor: 'black', height: '2px' }} />
  <div style={{textAlign: 'center'}}>
      Top selling
    </div>
  <Box sx={{ flexGrow: 1 }}>
      {/* Your existing code */}

      <ProductSection sectionTitle="Buildings & Constructions" products={buildings} />
      <ProductSection sectionTitle="Industrial Machines" products={industrialMachines} />
      <ProductSection sectionTitle="Industrial Supplies" products={industrialSupplies} />
      <ProductSection sectionTitle="Electrical & Electronics" products={electricalElectronics} />
      <ProductSection sectionTitle="Food Factory" products={foodFactory} />
      <ProductSection sectionTitle="Agriculture" products={agriculture} />

      {/* Your remaining code */}

    </Box>
    


  {/* <div style={{ backgroundColor: 'black', height: '1px' }} />  */}

      
  {/* <div style={{ backgroundColor: 'black', height: '1px' }} />  */}
  <footer style={footerStyle}>
      <div style={innerContainerStyle}>
        <div style={footerSectionStyle}>
          <h3><Link to="/about" style={{textDecoration: 'none', color:'white'}}>About Us</Link></h3>
          {/* <p>Your brief description about your website or company.</p> */}
        </div>
        <div style={footerSectionStyle}>
          <h3><Link to="/contact" style={{textDecoration: 'none', color:'white'}}>Contact Us</Link></h3>
          {/* <p>Email: info@example.com</p>
          <p>Phone: +123 456 789</p> */}
        </div>
        <div style={footerSectionStyle}>
          <h3><Link to="/services"style={{textDecoration: 'none', color:'white'}}>Services</Link></h3>
          {/* <ul>
            <li><Link to="/service1">Service 1</Link></li>
            <li><Link to="/service2">Service 2</Link></li>
            <li><Link to="/service3">Service 3</Link></li>
          </ul> */}
        </div>
        <div style={footerSectionStyle}>
          <h3><Link to="/terms" style={{textDecoration: 'none', color:'white'}}>Terms and Conditions</Link></h3>
          {/* <p>Read our terms and conditions here.</p> */}
        </div>
        <div style={footerSectionStyle}>
          <h3>Social Media</h3>
          <div style={socialIconsStyle}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color:'white'}}>
              <img src="https://static.vecteezy.com/system/resources/previews/016/716/467/non_2x/twitter-icon-free-png.png" alt="Twitter" style={iconStyle} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color:'white'}}>
              <img src="https://jasmine-porschalink.co.uk/wp-content/uploads/2019/10/facebook-logo-circle-png-download-512512-free-transparent-facebookpng-900_520.jpg" alt="Facebook" style={iconStyle} />
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>
    </footer>

    </Box>
  );
}
