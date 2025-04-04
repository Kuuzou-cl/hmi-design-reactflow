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


export default function MenuContent({ addNode, deleteNode, changeNameNode, changeLockNode }) {

  const [openItemId, setOpenItemId] = useState(null);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newText, setNewText] = useState<string>('');

  let mainListItems = [
    /** Objetos sistema */
    { id: 1, text: NodesTextLengthDisplay('Base', 'base'), icon: <AddCircleIcon />, type: 'base', tagname: NodesTagNameDisplay('Base', 'base') },
    { id: 2, text: NodesTextLengthDisplay('Flecha', 'arrow'), icon: <AddCircleIcon />, type: 'arrow', tagname: NodesTagNameDisplay('Arrow', 'arrow') },
    { id: 3, text: NodesTextLengthDisplay('Título', 'title'), icon: <AddCircleIcon />, type: 'title', tagname: NodesTagNameDisplay('Title', 'title') },
    { id: 4, text: NodesTextLengthDisplay('Vertice', 'vertice'), icon: <AddCircleIcon />, type: 'vertice', tagname: NodesTagNameDisplay('Vertice', 'vertice') },
    /** Objetos planta */
    { id: 5, text: NodesTextLengthDisplay('Actuador', 'actuador'), icon: <AddCircleIcon />, type: 'actuador', tagname: NodesTagNameDisplay('ACTD', 'actuador') },
    { id: 6, text: NodesTextLengthDisplay('Agitador', 'agitador'), icon: <AddCircleIcon />, type: 'agitador', tagname: NodesTagNameDisplay('AGIT', 'agitador') },
    { id: 7, text: NodesTextLengthDisplay('Alcalinidad', 'alcalinidad'), icon: <AddCircleIcon />, type: 'alcalinidad', tagname: NodesTagNameDisplay('ALCIT', 'alcalinidad') },
    { id: 8, text: NodesTextLengthDisplay('Bastidor', 'bastidor'), icon: <AddCircleIcon />, type: 'bastidor', tagname: NodesTagNameDisplay('BAST', 'bastidor') },
    { id: 10, text: NodesTextLengthDisplay('Bomba Aireadora', 'aireadora'), icon: <AddCircleIcon />, type: 'aireadora', tagname: NodesTagNameDisplay('AIR', 'aireadora') },
    { id: 11, text: NodesTextLengthDisplay('Bomba Dosif.', 'dosificadora'), icon: <AddCircleIcon />, type: 'dosificadora', tagname: NodesTagNameDisplay('BDOS', 'dosificadora') },
    { id: 12, text: NodesTextLengthDisplay('Bomba Elevadora', 'bomba_elevadora'), icon: <AddCircleIcon />, type: 'bomba_elevadora', tagname: NodesTagNameDisplay('BOMBEL', 'bomba_elevadora') },
    { id: 13, text: NodesTextLengthDisplay('Bomba Horómetro', 'bomba_horometro'), icon: <AddCircleIcon />, type: 'bomba_horometro', tagname: NodesTagNameDisplay('BOMBHR', 'bomba_horometro') },
    { id: 14, text: NodesTextLengthDisplay('Bomba Lectura', 'bomba_lectura'), icon: <AddCircleIcon />, type: 'bomba_lectura', tagname: NodesTagNameDisplay('BOMBLC', 'bomba_lectura') },
    { id: 15, text: NodesTextLengthDisplay('Bomba Lodo', 'bomba_lodo'), icon: <AddCircleIcon />, type: 'bomba_lodo', tagname: NodesTagNameDisplay('BOMBLD', 'bomba_lodo') },
    { id: 16, text: NodesTextLengthDisplay('Bomba Part. Directa', 'bomba_partida_directa'), icon: <AddCircleIcon />, type: 'bomba_partida_directa', tagname: NodesTagNameDisplay('BOMBPD', 'bomba_partida_directa') },
    { id: 17, text: NodesTextLengthDisplay('Bomba Part. Suave', 'bomba_partida_suave'), icon: <AddCircleIcon />, type: 'bomba_partida_suave', tagname: NodesTagNameDisplay('BOMBPS', 'bomba_partida_suave') },
    { id: 18, text: NodesTextLengthDisplay('Bomba Transvasije', 'bomba_transvasije'), icon: <AddCircleIcon />, type: 'bomba_transvasije', tagname: NodesTagNameDisplay('BOMBTS', 'bomba_transvasije') },
    { id: 19, text: NodesTextLengthDisplay('Bomba VDF', 'bomba_vdf'), icon: <AddCircleIcon />, type: 'bomba_vdf', tagname: NodesTagNameDisplay('BOMB', 'bomba_vdf') },
    { id: 20, text: NodesTextLengthDisplay('Boquilla', 'boquilla'), icon: <AddCircleIcon />, type: 'boquilla', tagname: NodesTagNameDisplay('BOQ', 'boquilla') },
    { id: 21, text: NodesTextLengthDisplay('Calefactor', 'calefactor'), icon: <AddCircleIcon />, type: 'calefactor', tagname: NodesTagNameDisplay('CALEF', 'calefactor') },
    { id: 22, text: NodesTextLengthDisplay('Clasificador', 'clasificador'), icon: <AddCircleIcon />, type: 'clasificador', tagname: NodesTagNameDisplay('CLASI', 'clasificador') },
    { id: 23, text: NodesTextLengthDisplay('Cloro', 'cloro'), icon: <AddCircleIcon />, type: 'cloro', tagname: NodesTagNameDisplay('CLIT', 'cloro') },
    { id: 24, text: NodesTextLengthDisplay('Color', 'color'), icon: <AddCircleIcon />, type: 'color', tagname: NodesTagNameDisplay('COLIT', 'color') },
    { id: 25, text: NodesTextLengthDisplay('Compactador', 'compactador'), icon: <AddCircleIcon />, type: 'compactador', tagname: NodesTagNameDisplay('COMPAC', 'compactador') },
    { id: 26, text: NodesTextLengthDisplay('Compresor', 'compresor'), icon: <AddCircleIcon />, type: 'compresor', tagname: NodesTagNameDisplay('CMPR', 'compresor') },
    { id: 27, text: NodesTextLengthDisplay('Conductividad', 'conductividad'), icon: <AddCircleIcon />, type: 'conductividad', tagname: NodesTagNameDisplay('CONIT', 'conductividad') },
    { id: 28, text: NodesTextLengthDisplay('Configuración', 'configuracion'), icon: <AddCircleIcon />, type: 'configuracion', tagname: NodesTagNameDisplay('CONF', 'configuracion') },
    { id: 29, text: NodesTextLengthDisplay('Decantador', 'decantador'), icon: <AddCircleIcon />, type: 'decantador', tagname: NodesTagNameDisplay('DECA', 'decantador') },
    { id: 30, text: NodesTextLengthDisplay('Desarenador', 'desarenador'), icon: <AddCircleIcon />, type: 'desarenador', tagname: NodesTagNameDisplay('DESAR', 'desarenador') },
    { id: 31, text: NodesTextLengthDisplay('Dosif. Volumétrico', 'dosificador_volumetrico'), icon: <AddCircleIcon />, type: 'dosificador_volumetrico', tagname: NodesTagNameDisplay('DOSV', 'dosificador_volumetrico') },
    { id: 32, text: NodesTextLengthDisplay('Extractor', 'extractor'), icon: <AddCircleIcon />, type: 'extractor', tagname: NodesTagNameDisplay('EXTR', 'extractor') },
    { id: 33, text: NodesTextLengthDisplay('Filtro', 'filtro'), icon: <AddCircleIcon />, type: 'filtro', tagname: NodesTagNameDisplay('FILTR', 'filtro') },
    { id: 34, text: NodesTextLengthDisplay('Flujo', 'flujo'), icon: <AddCircleIcon />, type: 'flujo', tagname: NodesTagNameDisplay('FIT', 'flujo') },
    { id: 35, text: NodesTextLengthDisplay('Fluor', 'flujo'), icon: <AddCircleIcon />, type: 'flujo', tagname: NodesTagNameDisplay('FLUIT', 'flujo') },
    { id: 36, text: NodesTextLengthDisplay('Generador', 'gpel'), icon: <AddCircleIcon />, type: 'gpel', tagname: NodesTagNameDisplay('GPEL', 'gpel') },
    { id: 37, text: NodesTextLengthDisplay('Hidrocarburo', 'hidrocarburo'), icon: <AddCircleIcon />, type: 'hidrocarburo', tagname: NodesTagNameDisplay('HIDIT', 'hidrocarburo') },
    { id: 32, text: NodesTextLengthDisplay('LSHH (Rebalse)', 'lshh'), icon: <AddCircleIcon />, type: 'lshh', tagname: NodesTagNameDisplay('LSHH', 'lshh') },
    { id: 33, text: NodesTextLengthDisplay('LSH (Alto)', 'lsh'), icon: <AddCircleIcon />, type: 'lsh', tagname: NodesTagNameDisplay('LSH', 'lsh') },
    { id: 34, text: NodesTextLengthDisplay('LSL (Bajo)', 'lsl'), icon: <AddCircleIcon />, type: 'lsl', tagname: NodesTagNameDisplay('LSL', 'lsl') },
    { id: 35, text: NodesTextLengthDisplay('LSLL (Seco)', 'lsll'), icon: <AddCircleIcon />, type: 'lsll', tagname: NodesTagNameDisplay('LSLL', 'lsll') },
    { id: 36, text: NodesTextLengthDisplay('Motor', 'motor'), icon: <AddCircleIcon />, type: 'motor', tagname: NodesTagNameDisplay('MOTR', 'motor') },
    { id: 37, text: NodesTextLengthDisplay('Nivel', 'level'), icon: <AddCircleIcon />, type: 'level', tagname: NodesTagNameDisplay('LIT', 'level') },
    { id: 38, text: NodesTextLengthDisplay('Oxígeno', 'oxigeno'), icon: <AddCircleIcon />, type: 'oxigeno', tagname: NodesTagNameDisplay('OXIT', 'oxigeno') },

    /**
    
    
    
    
    { id: 31, text: NodesTextLengthDisplay('Nivel', 'level'), icon: <AddCircleIcon />, type: 'level', tagname: NodesTagNameDisplay('LIT', 'level') },
    { id: 36, text: NodesTextLengthDisplay('Oxigeno', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 37, text: NodesTextLengthDisplay('PH', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 38, text: NodesTextLengthDisplay('Paleta', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 39, text: NodesTextLengthDisplay('Planta General', 'plta'), icon: <AddCircleIcon />, type: 'plta', tagname: NodesTagNameDisplay('PLTA', 'plta') },
    { id: 40, text: NodesTextLengthDisplay('PLC', 'plc'), icon: <AddCircleIcon />, type: 'plc', tagname: NodesTagNameDisplay('PLC', 'plc') },
    { id: 41, text: NodesTextLengthDisplay('PM', 'pm'), icon: <AddCircleIcon />, type: 'pm', tagname: NodesTagNameDisplay('PM', 'pm') },
    { id: 42, text: NodesTextLengthDisplay('Potencial de Oxidación', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 43, text: NodesTextLengthDisplay('Prensa', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 44, text: NodesTextLengthDisplay('PSH', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 45, text: NodesTextLengthDisplay('PSL', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 46, text: NodesTextLengthDisplay('Reja', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 47, text: NodesTextLengthDisplay('Sedimentador', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 48, text: NodesTextLengthDisplay('Solidos disueltos totales', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 49, text: NodesTextLengthDisplay('Solidos suspendidos totales', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 50, text: NodesTextLengthDisplay('Soplador', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 51, text: NodesTextLengthDisplay('Tablero', 'tblr'), icon: <AddCircleIcon />, type: 'tblr', tagname: NodesTagNameDisplay('TBLR', 'tblr') },
    { id: 52, text: NodesTextLengthDisplay('Tamiz', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 53, text: NodesTextLengthDisplay('Tambor', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 54, text: NodesTextLengthDisplay('Temperatura', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 55, text: NodesTextLengthDisplay('Tornillo', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 56, text: NodesTextLengthDisplay('Trend', 'trend'), icon: <AddCircleIcon />, type: 'trend', tagname: NodesTagNameDisplay('Trend', 'trend') },
    { id: 57, text: NodesTextLengthDisplay('Turbiedad', 'flow'), icon: <AddCircleIcon />, type: 'flow', tagname: NodesTagNameDisplay('FIT', 'flow') },
    { id: 58, text: NodesTextLengthDisplay('UPS', 'trend'), icon: <AddCircleIcon />, type: 'trend', tagname: NodesTagNameDisplay('Trend', 'trend') },
    { id: 59, text: NodesTextLengthDisplay('Válvula análoga', 'trend'), icon: <AddCircleIcon />, type: 'trend', tagname: NodesTagNameDisplay('Trend', 'trend') },
    { id: 60, text: NodesTextLengthDisplay('Válvula discreta', 'trend'), icon: <AddCircleIcon />, type: 'trend', tagname: NodesTagNameDisplay('Trend', 'trend') },
    { id: 61, text: NodesTextLengthDisplay('VDF', 'trend'), icon: <AddCircleIcon />, type: 'trend', tagname: NodesTagNameDisplay('Trend', 'trend') },
    { id: 62, text: NodesTextLengthDisplay('Voltaje', 'trend'), icon: <AddCircleIcon />, type: 'trend', tagname: NodesTagNameDisplay('Trend', 'trend') },
      */
  ];

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
