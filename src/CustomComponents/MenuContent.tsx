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
    { text: NodesTextLengthDisplay('Agitador', 'agitador'), icon: <AddCircleIcon />, type: 'agitador', tagname: NodesTagNameDisplay('AGIT', 'agitador') },
    { text: NodesTextLengthDisplay('Aireador', 'bomba_aireadora'), icon: <AddCircleIcon />, type: 'bomba_aireadora', tagname: NodesTagNameDisplay('BOMB', 'bomba_aireadora') },
    { text: NodesTextLengthDisplay('Alcalinidad', 'alcalinidad'), icon: <AddCircleIcon />, type: 'alcalinidad', tagname: NodesTagNameDisplay('ALCIT', 'alcalinidad') },
    { text: NodesTextLengthDisplay('Bastidor', 'bastidor'), icon: <AddCircleIcon />, type: 'bastidor', tagname: NodesTagNameDisplay('BAST', 'bastidor') },
    { text: NodesTextLengthDisplay('Boquilla', 'boquilla'), icon: <AddCircleIcon />, type: 'boquilla', tagname: NodesTagNameDisplay('BOQ', 'boquilla') },
    { text: NodesTextLengthDisplay('Calefactor', 'calefactor'), icon: <AddCircleIcon />, type: 'calefactor', tagname: NodesTagNameDisplay('CALEF', 'calefactor') },
    { text: NodesTextLengthDisplay('Centrífuga', 'clasificador'), icon: <AddCircleIcon />, type: 'clasificador', tagname: NodesTagNameDisplay('CLASI', 'clasificador') },
    { text: NodesTextLengthDisplay('Color', 'color'), icon: <AddCircleIcon />, type: 'color', tagname: NodesTagNameDisplay('COLIT', 'color') },
    { text: NodesTextLengthDisplay('Compresor', 'compresor'), icon: <AddCircleIcon />, type: 'compresor', tagname: NodesTagNameDisplay('CMPR', 'compresor') },
    { text: NodesTextLengthDisplay('Compuerta Tamiz', 'compresor'), icon: <AddCircleIcon />, type: 'compresor', tagname: NodesTagNameDisplay('CMPR', 'compresor') },
    { text: NodesTextLengthDisplay('Conductividad', 'conductividad'), icon: <AddCircleIcon />, type: 'conductividad', tagname: NodesTagNameDisplay('CONIT', 'conductividad') },
    { text: NodesTextLengthDisplay('Configuración', 'configuracion'), icon: <AddCircleIcon />, type: 'configuracion', tagname: NodesTagNameDisplay('CONF', 'configuracion') },
    { text: NodesTextLengthDisplay('Fuga Gas Cloro', 'lshh'), icon: <AddCircleIcon />, type: 'lshh', tagname: NodesTagNameDisplay('LSHH', 'lshh') },
    { text: NodesTextLengthDisplay('Dosificador', 'bomba_dosificadora'), icon: <AddCircleIcon />, type: 'bomba_dosificadora', tagname: NodesTagNameDisplay('BDOS', 'bomba_dosificadora') },
    { text: NodesTextLengthDisplay('Extractor', 'extractor'), icon: <AddCircleIcon />, type: 'extractor', tagname: NodesTagNameDisplay('EXTR', 'extractor') },
    { text: NodesTextLengthDisplay('Filtro', 'filtro'), icon: <AddCircleIcon />, type: 'filtro', tagname: NodesTagNameDisplay('FILTR', 'filtro') },
    { text: NodesTextLengthDisplay('Grupo Electrógeno', 'gpel'), icon: <AddCircleIcon />, type: 'gpel', tagname: NodesTagNameDisplay('GPEL', 'gpel') },
    { text: NodesTextLengthDisplay('Medición PH', 'ph'), icon: <AddCircleIcon />, type: 'ph', tagname: NodesTagNameDisplay('PHIT', 'ph') },
    { text: NodesTextLengthDisplay('Medición Caudal', 'flujo'), icon: <AddCircleIcon />, type: 'flujo', tagname: NodesTagNameDisplay('FIT', 'flujo') },
    { text: NodesTextLengthDisplay('Medición Cloro', 'cloro'), icon: <AddCircleIcon />, type: 'cloro', tagname: NodesTagNameDisplay('CLIT', 'cloro') },
    { text: NodesTextLengthDisplay('Medición Fluor', 'fluor'), icon: <AddCircleIcon />, type: 'fluor', tagname: NodesTagNameDisplay('FLUIT', 'fluor') },
    { text: NodesTextLengthDisplay('Medición Hidrocarburo', 'hidrocarburo'), icon: <AddCircleIcon />, type: 'hidrocarburo', tagname: NodesTagNameDisplay('HIDIT', 'hidrocarburo') },
    { text: NodesTextLengthDisplay('Medición Nivel', 'level'), icon: <AddCircleIcon />, type: 'level', tagname: NodesTagNameDisplay('LIT', 'level') },
    { text: NodesTextLengthDisplay('Medición Presión', 'presion'), icon: <AddCircleIcon />, type: 'presion', tagname: NodesTagNameDisplay('PIT', 'presion') },
    { text: NodesTextLengthDisplay('Medición SDT', 'solidos_disueltos'), icon: <AddCircleIcon />, type: 'solidos_disueltos', tagname: NodesTagNameDisplay('SDTIT', 'solidos_disueltos') },
    { text: NodesTextLengthDisplay('Medición Turbiedad', 'turbiedad'), icon: <AddCircleIcon />, type: 'turbiedad', tagname: NodesTagNameDisplay('TURIT', 'turbiedad') },
    { text: NodesTextLengthDisplay('Medición Voltaje', 'voltaje'), icon: <AddCircleIcon />, type: 'voltaje', tagname: NodesTagNameDisplay('EIT', 'voltaje') },
    { text: NodesTextLengthDisplay('Motobomba', 'bomba_vdf'), icon: <AddCircleIcon />, type: 'bomba_vdf', tagname: NodesTagNameDisplay('BOMB', 'bomba_vdf') },
    { text: NodesTextLengthDisplay('Oxidación', 'oxigeno'), icon: <AddCircleIcon />, type: 'oxigeno', tagname: NodesTagNameDisplay('OXIT', 'oxigeno') },
    { text: NodesTextLengthDisplay('Paleta', 'paleta'), icon: <AddCircleIcon />, type: 'paleta', tagname: NodesTagNameDisplay('PALT', 'paleta') },
    { text: NodesTextLengthDisplay('Partidor Suave', 'bomba_lodo'), icon: <AddCircleIcon />, type: 'bomba_lodo', tagname: NodesTagNameDisplay('BOMBLD', 'bomba_lodo') },
    { text: NodesTextLengthDisplay('LSHH (Rebalse)', 'lshh'), icon: <AddCircleIcon />, type: 'lshh', tagname: NodesTagNameDisplay('LSHH', 'lshh') },
    { text: NodesTextLengthDisplay('LSH (Alto)', 'lsh'), icon: <AddCircleIcon />, type: 'lsh', tagname: NodesTagNameDisplay('LSH', 'lsh') },
    { text: NodesTextLengthDisplay('LSM (Alto)', 'lsh'), icon: <AddCircleIcon />, type: 'lsh', tagname: NodesTagNameDisplay('LSH', 'lsh') },
    { text: NodesTextLengthDisplay('LSL (Bajo)', 'lsl'), icon: <AddCircleIcon />, type: 'lsl', tagname: NodesTagNameDisplay('LSL', 'lsl') },
    { text: NodesTextLengthDisplay('LSLL (Seco)', 'lsll'), icon: <AddCircleIcon />, type: 'lsll', tagname: NodesTagNameDisplay('LSLL', 'lsll') },
    { text: NodesTextLengthDisplay('Planta', 'plta'), icon: <AddCircleIcon />, type: 'plta', tagname: NodesTagNameDisplay('PLTA', 'plta') },
    { text: NodesTextLengthDisplay('PLC', 'plc'), icon: <AddCircleIcon />, type: 'plc', tagname: NodesTagNameDisplay('PLC', 'plc') },
    { text: NodesTextLengthDisplay('PM', 'pm'), icon: <AddCircleIcon />, type: 'pm', tagname: NodesTagNameDisplay('PM', 'pm') },
    { text: NodesTextLengthDisplay('Prensa', 'prensa'), icon: <AddCircleIcon />, type: 'prensa', tagname: NodesTagNameDisplay('PREN', 'prensa') },
    { text: NodesTextLengthDisplay('Reja', 'reja'), icon: <AddCircleIcon />, type: 'reja', tagname: NodesTagNameDisplay('REJA', 'reja') },
    { text: NodesTextLengthDisplay('Soplador', 'reja'), icon: <AddCircleIcon />, type: 'reja', tagname: NodesTagNameDisplay('REJA', 'reja') },
    { text: NodesTextLengthDisplay('Tablero', 'reja'), icon: <AddCircleIcon />, type: 'reja', tagname: NodesTagNameDisplay('REJA', 'reja') },
    { text: NodesTextLengthDisplay('Tambor', 'tambor'), icon: <AddCircleIcon />, type: 'tambor', tagname: NodesTagNameDisplay('TMBR', 'tambor') },
    { text: NodesTextLengthDisplay('Tamiz', 'tamiz'), icon: <AddCircleIcon />, type: 'tamiz', tagname: NodesTagNameDisplay('TMIZ', 'tamiz') },
    { text: NodesTextLengthDisplay('Temperatura', 'temperatura'), icon: <AddCircleIcon />, type: 'temperatura', tagname: NodesTagNameDisplay('TIT', 'temperatura') },
    { text: NodesTextLengthDisplay('Tornillo', 'tornillo'), icon: <AddCircleIcon />, type: 'tornillo', tagname: NodesTagNameDisplay('TRNI', 'tornillo') },
    { text: NodesTextLengthDisplay('Trend', 'trend'), icon: <AddCircleIcon />, type: 'trend', tagname: NodesTagNameDisplay('Trend', 'trend') },
    { text: NodesTextLengthDisplay('UPS', 'ups'), icon: <AddCircleIcon />, type: 'ups', tagname: NodesTagNameDisplay('UPS', 'ups') },
    { text: NodesTextLengthDisplay('Válvula análoga', 'valvula_analoga'), icon: <AddCircleIcon />, type: 'valvula_analoga', tagname: NodesTagNameDisplay('VALVA', 'valvula_analoga') },
    { text: NodesTextLengthDisplay('Válvula discreta', 'valvula_discreta'), icon: <AddCircleIcon />, type: 'valvula_discreta', tagname: NodesTagNameDisplay('VALVD', 'valvula_discreta') },
    { text: NodesTextLengthDisplay('VDF', 'vdf'), icon: <AddCircleIcon />, type: 'vdf', tagname: NodesTagNameDisplay('VDF', 'vdf') },
    { text: NodesTextLengthDisplay('Ventilador Desgasificador', 'vdf'), icon: <AddCircleIcon />, type: 'vdf', tagname: NodesTagNameDisplay('VDF', 'vdf') }
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
