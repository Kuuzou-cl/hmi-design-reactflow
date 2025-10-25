import React, { useState } from "react";

import {
  List,
  ListItemButton,
  Stack,
  ListItemIcon,
  ListItem,
  ListItemText,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Paper
} from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';


import { useStore } from '@xyflow/react';

const nodesSelector = (state) => {
  return state.nodes;
};

const NodesTextLengthDisplay = (text, type) => {
  const nodes = useStore(nodesSelector);
  return text + ' (' + nodes.filter((node) => node.type === type).length + ')' || 0;
};

const NodesTagNameDisplay = (text, type) => {
  const nodes = useStore(nodesSelector);
  const idTag = nodes.filter((node) => node.type === type).length + 1;
  return text + '-' + idTag.toString().padStart(3, '0') || 0;
};

const NodesTypeDisplay = (type) => {
  const nodes = useStore(nodesSelector);
  return nodes.filter((node) => node.type === type) || [];
};


export default function MenuContent({ addNode, deleteNode, changeNameNode, changeLockNode, exportData, importData }) {

  const [openItemId, setOpenItemId] = useState(null);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newText, setNewText] = useState<string>('');

  let itemTypes = [
    /** Objetos sistema */
    { text: NodesTextLengthDisplay('Base Pantalla', 'base'), icon: <AddCircleIcon />, type: 'base', tagname: NodesTagNameDisplay('Base', 'base') },
    { text: NodesTextLengthDisplay('Flecha', 'arrow'), icon: <AddCircleIcon />, type: 'arrow', tagname: NodesTagNameDisplay('Arrow', 'arrow') },
    { text: NodesTextLengthDisplay('Título Pantalla', 'title'), icon: <AddCircleIcon />, type: 'title', tagname: NodesTagNameDisplay('Title', 'title') },
    { text: NodesTextLengthDisplay('Texto', 'text'), icon: <AddCircleIcon />, type: 'text', tagname: NodesTagNameDisplay('Text', 'text') },
    { text: NodesTextLengthDisplay('Vertice de líneas', 'vertice'), icon: <AddCircleIcon />, type: 'vertice', tagname: NodesTagNameDisplay('Vertice', 'vertice') }
  ];

  const mainListItems = itemTypes.map((item, idx) => ({
    ...item,
    id: idx + 1,
  }));

  const handleToggle = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const handleEditClick = (index: number, currentText: string) => {
    setEditingIndex(index);
    setNewText(currentText);
  };

  const handleBlur = (index: string) => {
    changeNameNode(index, newText);
    setEditingIndex(null);
  };

  const handleLock = (index: string, value: boolean) => {
    if (value) {
      changeLockNode(index, false);
    }else{ 
      changeLockNode(index, true);
    }
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List sx={{ height: "100%", overflow: 'auto' }} dense>
        {mainListItems.map((item, index) => (
          <div key={item.id}>
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton>
                <ListItemIcon ><AddCircleIcon onClick={() => addNode(item.type, item.tagname)} /></ListItemIcon>
                <ListItemText primary={item.text} onClick={() => handleToggle(item.id)} />
                <ListItemIcon onClick={() => handleToggle(item.id)}  > <MenuOpenIcon style={{ textAlign: 'right' }}/> </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Collapse in={openItemId === item.id} timeout="auto" unmountOnExit>
              <TableContainer component={Paper} style={{ margin: '10px 0px' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ width: '50%' }}>Tagname</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {NodesTypeDisplay(item.type).map((nd, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ textAlign: 'start' }} onClick={() => handleEditClick(index, nd.data.label)}>
                          {editingIndex === index ? (
                            <>
                              <input
                                type="text"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                                onBlur={() => handleBlur(nd.id)}
                                autoFocus
                              />
                            </>
                          ) : (
                            nd.data.label
                          )}
                        </TableCell>
                        <TableCell sx={{ textAlign: 'end' }}>{ (nd.draggable === true) ? <LockOpenIcon onClick={() => handleLock(nd.id, nd.draggable)} /> :  <LockIcon onClick={() => handleLock(nd.id, nd.draggable)} /> } </TableCell>
                        <TableCell sx={{ textAlign: 'end' }}><DeleteIcon onClick={() => deleteNode(nd)} /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </div>
        ))}
      </List>      
    </Stack>
  );
}
