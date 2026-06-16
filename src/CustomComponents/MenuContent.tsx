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
    { text: NodesTextLengthDisplay('Actuador', 'actuador'), icon: <AddCircleIcon />, type: 'agitador', tagname: NodesTagNameDisplay('AGIT', 'agitador') },
    { text: NodesTextLengthDisplay('Actuador Dosif.', 'actuador'), icon: <AddCircleIcon />, type: 'bomba_aireadora', tagname: NodesTagNameDisplay('BOMB', 'bomba_aireadora') },
    { text: NodesTextLengthDisplay('Agitador', 'agitador'), icon: <AddCircleIcon />, type: 'alcalinidad', tagname: NodesTagNameDisplay('ALCIT', 'alcalinidad') },
    { text: NodesTextLengthDisplay('Med. Alcalinidad', 'alcalinidad'), icon: <AddCircleIcon />, type: 'bastidor', tagname: NodesTagNameDisplay('BAST', 'bastidor') },
    { text: NodesTextLengthDisplay('Banco Equipo UV', 'boquilla'), icon: <AddCircleIcon />, type: 'boquilla', tagname: NodesTagNameDisplay('BOQ', 'boquilla') },
    { text: NodesTextLengthDisplay('Barredor', 'calefactor'), icon: <AddCircleIcon />, type: 'calefactor', tagname: NodesTagNameDisplay('CALEF', 'calefactor') },
    { text: NodesTextLengthDisplay('Bomba', 'bomba'), icon: <AddCircleIcon />, type: 'bomba', tagname: NodesTagNameDisplay('BOMB', 'bomba') },
    { text: NodesTextLengthDisplay('Bomba Dosif.', 'dosificadora'), icon: <AddCircleIcon />, type: 'color', tagname: NodesTagNameDisplay('COLIT', 'color') },
    { text: NodesTextLengthDisplay('Centrifuga', 'compresor'), icon: <AddCircleIcon />, type: 'compresor', tagname: NodesTagNameDisplay('CMPR', 'compresor') },
    { text: NodesTextLengthDisplay('Clasificador', 'clasificador'), icon: <AddCircleIcon />, type: 'compresor', tagname: NodesTagNameDisplay('CMPR', 'compresor') },
    { text: NodesTextLengthDisplay('Med. Cloro', 'cloro'), icon: <AddCircleIcon />, type: 'conductividad', tagname: NodesTagNameDisplay('CONIT', 'conductividad') },
    { text: NodesTextLengthDisplay('Med. Color', 'color'), icon: <AddCircleIcon />, type: 'configuracion', tagname: NodesTagNameDisplay('CONF', 'configuracion') },
    { text: NodesTextLengthDisplay('Compresor', 'compresor'), icon: <AddCircleIcon />, type: 'lshh', tagname: NodesTagNameDisplay('LSHH', 'lshh') },
    { text: NodesTextLengthDisplay('Configuración', 'configuracion'), icon: <AddCircleIcon />, type: 'bomba_dosificadora', tagname: NodesTagNameDisplay('BDOS', 'bomba_dosificadora') },
    { text: NodesTextLengthDisplay('Decanter', 'extractor'), icon: <AddCircleIcon />, type: 'extractor', tagname: NodesTagNameDisplay('EXTR', 'extractor') },
    { text: NodesTextLengthDisplay('Extractor', 'extractor'), icon: <AddCircleIcon />, type: 'filtro', tagname: NodesTagNameDisplay('FILTR', 'filtro') },
    { text: NodesTextLengthDisplay('Filtro', 'filtro'), icon: <AddCircleIcon />, type: 'gpel', tagname: NodesTagNameDisplay('GPEL', 'gpel') },
    { text: NodesTextLengthDisplay('Med. Flujo', 'flujo'), icon: <AddCircleIcon />, type: 'flujo', tagname: NodesTagNameDisplay('FIT', 'flujo') },
    { text: NodesTextLengthDisplay('Med. Flúor', 'fluor'), icon: <AddCircleIcon />, type: 'fluor', tagname: NodesTagNameDisplay('FLU', 'fluor') },
    { text: NodesTextLengthDisplay('Golpe de Ariete', 'cloro'), icon: <AddCircleIcon />, type: 'cloro', tagname: NodesTagNameDisplay('CLIT', 'cloro') },
    { text: NodesTextLengthDisplay('Grupo Electrógeno', 'gpel'), icon: <AddCircleIcon />, type: 'fluor', tagname: NodesTagNameDisplay('FLUIT', 'fluor') },
    { text: NodesTextLengthDisplay('GuardaMotor', 'hidrocarburo'), icon: <AddCircleIcon />, type: 'hidrocarburo', tagname: NodesTagNameDisplay('HIDIT', 'hidrocarburo') },
    { text: NodesTextLengthDisplay('Med. Hidrocarburo', 'temperatura'), icon: <AddCircleIcon />, type: 'temperatura', tagname: NodesTagNameDisplay('TIT', 'temperatura') },
    { text: NodesTextLengthDisplay('Alarma Nivel Alto', 'lsh'), icon: <AddCircleIcon />, type: 'LSH', tagname: NodesTagNameDisplay('LSH', 'lsh') },
    { text: NodesTextLengthDisplay('Alarma Nivel Alto Alto', 'lshh'), icon: <AddCircleIcon />, type: 'LSHH', tagname: NodesTagNameDisplay('LSHH', 'lsh') },
    { text: NodesTextLengthDisplay('Alarma Nivel Bajo', 'lsl'), icon: <AddCircleIcon />, type: 'LSL', tagname: NodesTagNameDisplay('LSL', 'LSL') },
    { text: NodesTextLengthDisplay('Alarma Nivel Bajo Bajo', 'lsll'), icon: <AddCircleIcon />, type: 'LSLL', tagname: NodesTagNameDisplay('LSLL', 'lsll') },
    { text: NodesTextLengthDisplay('Alarma Nivel Medio', 'bomba_vdf'), icon: <AddCircleIcon />, type: 'bomba_vdf', tagname: NodesTagNameDisplay('BOMB', 'bomba_vdf') },
    { text: NodesTextLengthDisplay('Motor', 'oxigeno'), icon: <AddCircleIcon />, type: 'oxigeno', tagname: NodesTagNameDisplay('OXIT', 'oxigeno') },
    { text: NodesTextLengthDisplay('MotoVibrador', 'paleta'), icon: <AddCircleIcon />, type: 'paleta', tagname: NodesTagNameDisplay('PALT', 'paleta') },
    { text: NodesTextLengthDisplay('Med. Nivel', 'level'), icon: <AddCircleIcon />, type: 'level', tagname: NodesTagNameDisplay('LIT', 'level') },
    { text: NodesTextLengthDisplay('Med. Oxígeno', 'lshh'), icon: <AddCircleIcon />, type: 'lshh', tagname: NodesTagNameDisplay('LSHH', 'lshh') },
    { text: NodesTextLengthDisplay('Partidor Suave', 'lsh'), icon: <AddCircleIcon />, type: 'lsh', tagname: NodesTagNameDisplay('LSH', 'lsh') },
    { text: NodesTextLengthDisplay('Med. PH', 'lsh'), icon: <AddCircleIcon />, type: 'lsh', tagname: NodesTagNameDisplay('LSH', 'lsh') },
    { text: NodesTextLengthDisplay('Planta', 'lsl'), icon: <AddCircleIcon />, type: 'lsl', tagname: NodesTagNameDisplay('LSL', 'lsl') },
    { text: NodesTextLengthDisplay('PLC', 'lsll'), icon: <AddCircleIcon />, type: 'lsll', tagname: NodesTagNameDisplay('LSLL', 'lsll') },
    { text: NodesTextLengthDisplay('PM', 'plta'), icon: <AddCircleIcon />, type: 'plta', tagname: NodesTagNameDisplay('PLTA', 'plta') },
    { text: NodesTextLengthDisplay('Prensa', 'plc'), icon: <AddCircleIcon />, type: 'plc', tagname: NodesTagNameDisplay('PLC', 'plc') },
    { text: NodesTextLengthDisplay('Med. Presión', 'pm'), icon: <AddCircleIcon />, type: 'pm', tagname: NodesTagNameDisplay('PM', 'pm') },
    { text: NodesTextLengthDisplay('PSL', 'prensa'), icon: <AddCircleIcon />, type: 'prensa', tagname: NodesTagNameDisplay('PREN', 'prensa') },
    { text: NodesTextLengthDisplay('Reja', 'reja'), icon: <AddCircleIcon />, type: 'reja', tagname: NodesTagNameDisplay('REJA', 'reja') },
    { text: NodesTextLengthDisplay('Soplador', 'reja'), icon: <AddCircleIcon />, type: 'reja', tagname: NodesTagNameDisplay('REJA', 'reja') },
    { text: NodesTextLengthDisplay('Tablero', 'reja'), icon: <AddCircleIcon />, type: 'reja', tagname: NodesTagNameDisplay('REJA', 'reja') },
    { text: NodesTextLengthDisplay('Tambor', 'tambor'), icon: <AddCircleIcon />, type: 'tambor', tagname: NodesTagNameDisplay('TMBR', 'tambor') },
    { text: NodesTextLengthDisplay('Tamiz', 'tamiz'), icon: <AddCircleIcon />, type: 'tamiz', tagname: NodesTagNameDisplay('TMIZ', 'tamiz') },
    { text: NodesTextLengthDisplay('Med. Temperatura', 'temperatura'), icon: <AddCircleIcon />, type: 'temperatura', tagname: NodesTagNameDisplay('TIT', 'temperatura') },
    { text: NodesTextLengthDisplay('Tornillo', 'tornillo'), icon: <AddCircleIcon />, type: 'tornillo', tagname: NodesTagNameDisplay('TRNI', 'tornillo') },
    { text: NodesTextLengthDisplay('Med. Flujo', 'flujo'), icon: <AddCircleIcon />, type: 'ups', tagname: NodesTagNameDisplay('UPS', 'ups') },
    { text: NodesTextLengthDisplay('Med. Turbiedad', 'valvula_analoga'), icon: <AddCircleIcon />, type: 'valvula_analoga', tagname: NodesTagNameDisplay('VALVA', 'valvula_analoga') },
    { text: NodesTextLengthDisplay('Equipo UV', 'valvula_discreta'), icon: <AddCircleIcon />, type: 'valvula_discreta', tagname: NodesTagNameDisplay('VALVD', 'valvula_discreta') },
    { text: NodesTextLengthDisplay('Válvula Análoga', 'vdf'), icon: <AddCircleIcon />, type: 'vdf', tagname: NodesTagNameDisplay('VDF', 'vdf') },
    { text: NodesTextLengthDisplay('Válvula Discreta', 'vdf'), icon: <AddCircleIcon />, type: 'vdf', tagname: NodesTagNameDisplay('VDF', 'vdf') },
    { text: NodesTextLengthDisplay('Variador de Frec.', 'vdf'), icon: <AddCircleIcon />, type: 'vdf', tagname: NodesTagNameDisplay('VDF', 'vdf') },
    { text: NodesTextLengthDisplay('Med. Velocidad', 'vdf'), icon: <AddCircleIcon />, type: 'vdf', tagname: NodesTagNameDisplay('VDF', 'vdf') },
    { text: NodesTextLengthDisplay('Med. Vibración', 'vdf'), icon: <AddCircleIcon />, type: 'vdf', tagname: NodesTagNameDisplay('VDF', 'vdf') },
    { text: NodesTextLengthDisplay('Med. Voltaje', 'vdf'), icon: <AddCircleIcon />, type: 'vdf', tagname: NodesTagNameDisplay('VDF', 'vdf') },
    { text: NodesTextLengthDisplay('Trend', 'trend'), icon: <AddCircleIcon />, type: 'trend', tagname: NodesTagNameDisplay('Trend', 'trend') },
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
