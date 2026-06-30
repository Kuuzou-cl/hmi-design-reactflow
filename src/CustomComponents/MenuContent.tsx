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
    { text: NodesTextLengthDisplay('Actuador', 'actuador'), icon: <AddCircleIcon />, type: 'actuador', tagname: NodesTagNameDisplay('ACTD', 'actuador') },
    { text: NodesTextLengthDisplay('Actuador Dosificador', 'actuador_dosificador'), icon: <AddCircleIcon />, type: 'actuador_dosificador', tagname: NodesTagNameDisplay('ACTD', 'actuador_dosificador') },
    { text: NodesTextLengthDisplay('Agitador', 'agitador'), icon: <AddCircleIcon />, type: 'agitador', tagname: NodesTagNameDisplay('AGIT', 'agitador') },
    { text: NodesTextLengthDisplay('Alcalinidad (PV)', 'alcalinidad'), icon: <AddCircleIcon />, type: 'alcalinidad', tagname: NodesTagNameDisplay('ALIT', 'alcalinidad') },
    { text: NodesTextLengthDisplay('Banco UV', 'banco_uv'), icon: <AddCircleIcon />, type: 'banco_uv', tagname: NodesTagNameDisplay('BCOUV', 'banco_uv') },
    { text: NodesTextLengthDisplay('Barredor', 'barredor'), icon: <AddCircleIcon />, type: 'barredor', tagname: NodesTagNameDisplay('BARR', 'barredor') },
    { text: NodesTextLengthDisplay('Bomba', 'bomba'), icon: <AddCircleIcon />, type: 'bomba', tagname: NodesTagNameDisplay('BOMB', 'bomba') },
    { text: NodesTextLengthDisplay('Bomba Dosificadora', 'bomba_dosificadora'), icon: <AddCircleIcon />, type: 'bomba_dosificadora', tagname: NodesTagNameDisplay('BDOS', 'bomba_dosificadora') },
    { text: NodesTextLengthDisplay('Centrifuga', 'centrifuga'), icon: <AddCircleIcon />, type: 'centrifuga', tagname: NodesTagNameDisplay('CEN', 'centrifuga') },
    { text: NodesTextLengthDisplay('Clasificador', 'clasificador'), icon: <AddCircleIcon />, type: 'clasificador', tagname: NodesTagNameDisplay('CLAR', 'clasificador') },
    { text: NodesTextLengthDisplay('Cloro (PV)', 'cloro'), icon: <AddCircleIcon />, type: 'cloro', tagname: NodesTagNameDisplay('CL', 'cloro') },
    { text: NodesTextLengthDisplay('Color (PV)', 'color'), icon: <AddCircleIcon />, type: 'color', tagname: NodesTagNameDisplay('COIT', 'color') },
    { text: NodesTextLengthDisplay('Compresor', 'compresor'), icon: <AddCircleIcon />, type: 'compresor', tagname: NodesTagNameDisplay('CMPR', 'compresor') },
    { text: NodesTextLengthDisplay('Configuración', 'configuracion'), icon: <AddCircleIcon />, type: 'configuracion', tagname: NodesTagNameDisplay('CONF', 'configuracion') },
    { text: NodesTextLengthDisplay('Decanter', 'decanter'), icon: <AddCircleIcon />, type: 'decanter', tagname: NodesTagNameDisplay('DECA', 'decanter') },
    { text: NodesTextLengthDisplay('Extractor', 'extractor'), icon: <AddCircleIcon />, type: 'extractor', tagname: NodesTagNameDisplay('EXTR', 'extractor') },
    { text: NodesTextLengthDisplay('Filtro', 'filtro'), icon: <AddCircleIcon />, type: 'filtro', tagname: NodesTagNameDisplay('FILTRO', 'filtro') },
    { text: NodesTextLengthDisplay('Flujo (PV)', 'flujo'), icon: <AddCircleIcon />, type: 'flujo', tagname: NodesTagNameDisplay('FIT', 'flujo') },
    { text: NodesTextLengthDisplay('Fluor (PV)', 'fluor'), icon: <AddCircleIcon />, type: 'fluor', tagname: NodesTagNameDisplay('FLU', 'fluor') },
    { text: NodesTextLengthDisplay('Golpe de Ariete', 'golpe_ariete'), icon: <AddCircleIcon />, type: 'golpe_ariete', tagname: NodesTagNameDisplay('GA', 'golpe_ariete') },
    { text: NodesTextLengthDisplay('Grupo Electrógeno', 'generador'), icon: <AddCircleIcon />, type: 'generador', tagname: NodesTagNameDisplay('GPEL', 'generador') },
    { text: NodesTextLengthDisplay('Guarda Motor', 'guardamotor'), icon: <AddCircleIcon />, type: 'guardamotor', tagname: NodesTagNameDisplay('GM', 'guardamotor') },
    { text: NodesTextLengthDisplay('Hidrocarburo (PV)', 'hidrocarburo'), icon: <AddCircleIcon />, type: 'hidrocarburo', tagname: NodesTagNameDisplay('HID', 'hidrocarburo') },
    { text: NodesTextLengthDisplay('Alarma Nivel Alto Alto', 'lshh'), icon: <AddCircleIcon />, type: 'lshh', tagname: NodesTagNameDisplay('LSHH', 'lsh') },
    { text: NodesTextLengthDisplay('Alarma Nivel Alto', 'lsh'), icon: <AddCircleIcon />, type: 'lsh', tagname: NodesTagNameDisplay('LSH', 'lsh') },
    { text: NodesTextLengthDisplay('Alarma Nivel Medio', 'lsm'), icon: <AddCircleIcon />, type: 'lsm', tagname: NodesTagNameDisplay('LSM', 'lsm') },
    { text: NodesTextLengthDisplay('Alarma Nivel Bajo', 'lsl'), icon: <AddCircleIcon />, type: 'lsl', tagname: NodesTagNameDisplay('LSL', 'lsl') },
    { text: NodesTextLengthDisplay('Alarma Nivel Bajo Bajo', 'lsll'), icon: <AddCircleIcon />, type: 'lsll', tagname: NodesTagNameDisplay('LSLL', 'lsll') },
    { text: NodesTextLengthDisplay('Motor', 'motor'), icon: <AddCircleIcon />, type: 'motor', tagname: NodesTagNameDisplay('MOTR', 'motor') },
    { text: NodesTextLengthDisplay('Motor Vibrador', 'motovibrador'), icon: <AddCircleIcon />, type: 'motovibrador', tagname: NodesTagNameDisplay('VIBR', 'motovibrador') },
    { text: NodesTextLengthDisplay('Nivel', 'nivel'), icon: <AddCircleIcon />, type: 'nivel', tagname: NodesTagNameDisplay('LIT', 'nivel') },
    { text: NodesTextLengthDisplay('Nivel v2', 'nivel_v2'), icon: <AddCircleIcon />, type: 'nivel_v2', tagname: NodesTagNameDisplay('LIT', 'nivel_v2') },
    { text: NodesTextLengthDisplay('Oxígeno (PV)', 'oxigeno'), icon: <AddCircleIcon />, type: 'oxigeno', tagname: NodesTagNameDisplay('ORPIT', 'oxigeno') },
    { text: NodesTextLengthDisplay('Partido Suave', 'partidosuave'), icon: <AddCircleIcon />, type: 'partidosuave', tagname: NodesTagNameDisplay('PSVE', 'partidosuave') },
    { text: NodesTextLengthDisplay('PH (PV)', 'ph'), icon: <AddCircleIcon />, type: 'ph', tagname: NodesTagNameDisplay('PHIT', 'ph') },
    { text: NodesTextLengthDisplay('PLTA', 'plta'), icon: <AddCircleIcon />, type: 'plta', tagname: NodesTagNameDisplay('PLTA', 'plta') },
    { text: NodesTextLengthDisplay('PLC', 'plc'), icon: <AddCircleIcon />, type: 'plc', tagname: NodesTagNameDisplay('PLC', 'plc') },
    { text: NodesTextLengthDisplay('PM', 'pm'), icon: <AddCircleIcon />, type: 'pm', tagname: NodesTagNameDisplay('PM', 'pm') },
    { text: NodesTextLengthDisplay('Prensa', 'prensa'), icon: <AddCircleIcon />, type: 'prensa', tagname: NodesTagNameDisplay('PRE', 'prensa') },
    { text: NodesTextLengthDisplay('Presión (PV)', 'presion'), icon: <AddCircleIcon />, type: 'presion', tagname: NodesTagNameDisplay('PIT', 'presion') },
    { text: NodesTextLengthDisplay('PSL', 'psl'), icon: <AddCircleIcon />, type: 'psl', tagname: NodesTagNameDisplay('PSL', 'psl') },
    { text: NodesTextLengthDisplay('Reja', 'reja'), icon: <AddCircleIcon />, type: 'reja', tagname: NodesTagNameDisplay('REJA', 'reja') },
    { text: NodesTextLengthDisplay('Soplador', 'soplador'), icon: <AddCircleIcon />, type: 'soplador', tagname: NodesTagNameDisplay('SOP', 'soplador') },
    { text: NodesTextLengthDisplay('Tablero', 'tablero'), icon: <AddCircleIcon />, type: 'tablero', tagname: NodesTagNameDisplay('TBLR', 'tablero') },
    { text: NodesTextLengthDisplay('Tambor', 'tambor'), icon: <AddCircleIcon />, type: 'tambor', tagname: NodesTagNameDisplay('TAMB', 'tambor') },
    { text: NodesTextLengthDisplay('Tamiz', 'tamiz'), icon: <AddCircleIcon />, type: 'tamiz', tagname: NodesTagNameDisplay('TMZ', 'tamiz') },
    { text: NodesTextLengthDisplay('Temperatura (PV)', 'temperatura'), icon: <AddCircleIcon />, type: 'temperatura', tagname: NodesTagNameDisplay('TIT', 'temperatura') },
    { text: NodesTextLengthDisplay('Tornillo', 'tornillo'), icon: <AddCircleIcon />, type: 'tornillo', tagname: NodesTagNameDisplay('TRNI', 'tornillo') },
    { text: NodesTextLengthDisplay('Turbiedad (PV)', 'turbiedad'), icon: <AddCircleIcon />, type: 'turbiedad', tagname: NodesTagNameDisplay('TUR', 'turbiedad') },
    { text: NodesTextLengthDisplay('UV', 'uv'), icon: <AddCircleIcon />, type: 'uv', tagname: NodesTagNameDisplay('DEUV', 'uv') },
    { text: NodesTextLengthDisplay('Válvula Analógica', 'valvula_analoga'), icon: <AddCircleIcon />, type: 'valvula_analoga', tagname: NodesTagNameDisplay('VALVA', 'valvula_analoga') },
    { text: NodesTextLengthDisplay('Válvula Discreta', 'valvula_discreta'), icon: <AddCircleIcon />, type: 'valvula_discreta', tagname: NodesTagNameDisplay('VALVD', 'valvula_discreta') },
    { text: NodesTextLengthDisplay('VDF', 'vdf'), icon: <AddCircleIcon />, type: 'vdf', tagname: NodesTagNameDisplay('VDF', 'vdf') },
    { text: NodesTextLengthDisplay('Vibración (PV)', 'vibracion'), icon: <AddCircleIcon />, type: 'vibracion', tagname: NodesTagNameDisplay('SIT', 'vibracion') },
    { text: NodesTextLengthDisplay('Velocidad (PV)', 'velocidad'), icon: <AddCircleIcon />, type: 'velocidad', tagname: NodesTagNameDisplay('XIT', 'velocidad') },
    { text: NodesTextLengthDisplay('Voltaje (PV)', 'voltaje'), icon: <AddCircleIcon />, type: 'voltaje', tagname: NodesTagNameDisplay('ET', 'voltaje') },
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
