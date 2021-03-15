import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {
  IconFlagRU,
  IconFlagUS
} from 'material-ui-flags';

const languages = [<IconFlagRU/>, <IconFlagUS/>];

function LDialog({ onClose, selectedValue, open }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    onClose(selectedValue);
  };
  
  const handleListItemClick = (value) => {
    onClose(value);
    setAnchorEl(null);
  };
 
  return (
    <>
    <Button 
      aria-controls="menu" 
      aria-haspopup="true" 
      onClick={handleClick}>
        {selectedValue}
      </Button>
    <Menu 
      onClose={handleClose} 
      anchorEl={anchorEl}
      aria-labelledby="menu-title" 
      open={Boolean(anchorEl)}
      >
        {languages.map((language,i) => (
          <MenuItem button onClick={() => handleListItemClick(language)} key={i}>
            {language} 
          </MenuItem>
        ))}
    </Menu>
    </>
  );
}

LDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.node.isRequired,
};

export default function LDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(languages[0]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <LDialog selectedValue={selectedValue}  open={open} handleClickOpen={handleClickOpen} onClose={handleClose} />
    </div>
  );
}