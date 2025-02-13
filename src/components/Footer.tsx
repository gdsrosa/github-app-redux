import { styled } from '@mui/material';

const StyledFooter = styled('footer')(({ theme }) => ({
  ...theme.typography.body2,
  position: 'fixed',
  bottom: 0,
  left: 0,
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  margin: 0,
  padding: 4,
  color: 'white',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
}));

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>
        &copy; {year} | Application developed by Gabriel Rosa for learning
        purpose.
      </p>
    </StyledFooter>
  );
};

export default Footer;
