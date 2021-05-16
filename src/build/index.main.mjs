// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export async function Auc(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Object({
    deadline: ctc0,
    initialAddress: ctc1,
    potAmount: ctc0
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc1, ctc0]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v18 = await ctc.creationTime();
  
  const v22 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:45:48:application',
    fs: ['at ./index.rsh:43:21:application call to [unknown function] (defined at: ./index.rsh:43:25:function exp)'],
    msg: 'getParams',
    who: 'Auc'
    });
  const v23 = v22.deadline;
  const v24 = v22.potAmount;
  const v25 = v22.initialAddress;
  
  
  const txn1 = await (ctc.sendrecv(1, 3, stdlib.checkedBigNumberify('./index.rsh:47:17:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0, ctc1], [v18, v23, v24, v25], [v24, []], [ctc0, ctc0, ctc1], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:47:17:dot', stdlib.UInt_max, 0), v18]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:47:17:dot', stdlib.UInt_max, 0)]);
    const [v27, v28, v29] = txn1.data;
    const v32 = txn1.time;
    const v26 = txn1.from;
    
    sim_r.txns.push({
      amt: v28,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:50:21:after expr stmt semicolon', stdlib.UInt_max, 1), v26, v27, v28, v29, v32]);
    sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:50:21:after expr stmt semicolon', stdlib.UInt_max, 1), v26, v27, v28, v29]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:50:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v27, v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v26 = txn1.from;
  ;
  stdlib.protect(ctc3, await interact.updateInterface(v28), {
    at: './index.rsh:51:63:application',
    fs: ['at ./index.rsh:51:21:application call to [unknown function] (defined at: ./index.rsh:51:25:function exp)'],
    msg: 'updateInterface',
    who: 'Auc'
    });
  
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:52:17:dot', stdlib.UInt_max, 4), [ctc1, ctc0, ctc0, ctc1, ctc0], [v26, v27, v28, v29, v32], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:52:17:dot', stdlib.UInt_max, 1), v26, v27, v28, v29, v32]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:52:17:dot', stdlib.UInt_max, 1), v26, v27, v28, v29]);
    const [] = txn2.data;
    const v40 = txn2.time;
    const v37 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v39 = stdlib.addressEq(v26, v37);
    stdlib.assert(v39, {
      at: './index.rsh:52:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Auc'
      });
    const v43 = stdlib.add(v32, v27);
    const v46 = true;
    const v47 = v28;
    const v48 = v29;
    const v138 = v40;
    const v139 = v32;
    
    if ((() => {
      const v53 = stdlib.gt(v43, v139);
      const v55 = v53 ? v46 : false;
      
      return v55;})()) {
      const v110 = stdlib.sub(v43, v139);
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v43, v47, v48, v110, v138]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v43, v47, v48, v110]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v47, v138]);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v47]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    return sim_r;
    })));
  const [] = txn2.data;
  const v40 = txn2.time;
  const v37 = txn2.from;
  ;
  const v39 = stdlib.addressEq(v26, v37);
  stdlib.assert(v39, {
    at: './index.rsh:52:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auc'
    });
  const v43 = stdlib.add(v32, v27);
  let v46 = true;
  let v47 = v28;
  let v48 = v29;
  let v138 = v40;
  let v139 = v32;
  
  while ((() => {
    const v53 = stdlib.gt(v43, v139);
    const v55 = v53 ? v46 : false;
    
    return v55;})()) {
    const v110 = stdlib.sub(v43, v139);
    const txn3 = await (ctc.recv(6, 1, [ctc4], false, v110));
    if (txn3.didTimeout) {
      
      const txn4 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('./index.rsh:93:35:dot', stdlib.UInt_max, 5), [ctc1, ctc0, ctc0, ctc1, ctc0, ctc0], [v26, v43, v47, v48, v110, v138], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:93:35:dot', stdlib.UInt_max, 3), v26, v43, v47, v48, v110, v138]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:93:35:dot', stdlib.UInt_max, 3), v26, v43, v47, v48, v110]);
        const [] = txn4.data;
        const v115 = txn4.time;
        const v113 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv46 = false;
        const cv47 = v47;
        const cv48 = v48;
        const cv138 = v115;
        const cv139 = v138;
        
        (() => {
          const v46 = cv46;
          const v47 = cv47;
          const v48 = cv48;
          const v138 = cv138;
          const v139 = cv139;
          
          if ((() => {
            const v53 = stdlib.gt(v43, v139);
            const v55 = v53 ? v46 : false;
            
            return v55;})()) {
            const v110 = stdlib.sub(v43, v139);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v43, v47, v48, v110, v138]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v43, v47, v48, v110]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v47, v138]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v47]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();
        return sim_r;
        })));
      const [] = txn4.data;
      const v115 = txn4.time;
      const v113 = txn4.from;
      ;
      const cv46 = false;
      const cv47 = v47;
      const cv48 = v48;
      const cv138 = v115;
      const cv139 = v138;
      
      v46 = cv46;
      v47 = cv47;
      v48 = cv48;
      v138 = cv138;
      v139 = cv139;
      
      continue;
      }
    else {
      const [v76] = txn3.data;
      const v82 = txn3.time;
      const v75 = txn3.from;
      const v78 = v76[stdlib.checkedBigNumberify('./index.rsh:74:34:array ref', stdlib.UInt_max, 0)];
      ;
      stdlib.protect(ctc3, await interact.updateInterface(v78), {
        at: './index.rsh:82:64:application',
        fs: ['at ./index.rsh:82:33:application call to [unknown function] (defined at: ./index.rsh:82:37:function exp)', 'at ./index.rsh:56:31:application call to [unknown function] (defined at: ./index.rsh:56:31:function exp)'],
        msg: 'updateInterface',
        who: 'Auc'
        });
      
      ;
      const v106 = v76[stdlib.checkedBigNumberify('./index.rsh:88:61:array ref', stdlib.UInt_max, 1)];
      const cv46 = true;
      const cv47 = v78;
      const cv48 = v106;
      const cv138 = v82;
      const cv139 = v138;
      
      v46 = cv46;
      v47 = cv47;
      v48 = cv48;
      v138 = cv138;
      v139 = cv139;
      
      continue;}
    }
  
  
  const txn3 = await (ctc.sendrecv(5, 1, stdlib.checkedBigNumberify('./index.rsh:101:17:dot', stdlib.UInt_max, 2), [ctc1, ctc0, ctc0, ctc1], [v26, v47, v138, v26], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, false, (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:101:17:dot', stdlib.UInt_max, 4), v26, v47, v138]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:101:17:dot', stdlib.UInt_max, 4), v26, v47]);
    const [v121] = txn3.data;
    const v124 = txn3.time;
    const v120 = txn3.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v123 = stdlib.addressEq(v26, v120);
    stdlib.assert(v123, {
      at: './index.rsh:101:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Auc'
      });
    sim_r.txns.push({
      amt: v47,
      kind: 'from',
      to: v121,
      tok: undefined
      });
    
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
      })
    sim_r.nextSt = stdlib.digest(ctc10, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:104:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  const [v121] = txn3.data;
  const v124 = txn3.time;
  const v120 = txn3.from;
  ;
  const v123 = stdlib.addressEq(v26, v120);
  stdlib.assert(v123, {
    at: './index.rsh:101:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auc'
    });
  ;
  stdlib.protect(ctc3, await interact.auctionEnds(v48), {
    at: './index.rsh:37:41:application',
    fs: ['at ./index.rsh:36:21:application call to [unknown function] (defined at: ./index.rsh:36:37:function exp)', 'at ./index.rsh:103:24:application call to "auctionEnds" (defined at: ./index.rsh:35:49:function exp)'],
    msg: 'auctionEnds',
    who: 'Auc'
    });
  
  return;
  
  
  
  };
export async function Bid(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc1, ctc0]);
  
  
  const v18 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc0, ctc1], false, false));
  const [v27, v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v26 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, false));
  const [] = txn2.data;
  const v40 = txn2.time;
  const v37 = txn2.from;
  ;
  const v39 = stdlib.addressEq(v26, v37);
  stdlib.assert(v39, {
    at: './index.rsh:52:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bid'
    });
  const v43 = stdlib.add(v32, v27);
  let v46 = true;
  let v47 = v28;
  let v48 = v29;
  let v138 = v40;
  let v139 = v32;
  
  while ((() => {
    const v53 = stdlib.gt(v43, v139);
    const v55 = v53 ? v46 : false;
    
    return v55;})()) {
    const v110 = stdlib.sub(v43, v139);
    const v65 = ctc.selfAddress('Bid', true, stdlib.checkedBigNumberify('./index.rsh:56:31:application', stdlib.UInt_max, 64));
    const v68 = stdlib.protect(ctc0, await interact.getBid(), {
      at: './index.rsh:63:64:application',
      fs: ['at ./index.rsh:56:31:application call to [unknown function] (defined at: ./index.rsh:59:32:function exp)', 'at ./index.rsh:56:31:application call to [unknown function] (defined at: ./index.rsh:56:31:function exp)'],
      msg: 'getBid',
      who: 'Bid'
      });
    const v69 = stdlib.add(v68, v47);
    const v70 = stdlib.protect(ctc2, await interact.mayBid(v69, v68), {
      at: './index.rsh:70:61:application',
      fs: ['at ./index.rsh:56:31:application call to [unknown function] (defined at: ./index.rsh:59:32:function exp)', 'at ./index.rsh:56:31:application call to [unknown function] (defined at: ./index.rsh:56:31:function exp)'],
      msg: 'mayBid',
      who: 'Bid'
      });
    
    const v72 = [v69, v65];
    
    const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:56:31:dot', stdlib.UInt_max, 5), [ctc1, ctc0, ctc0, ctc1, ctc0, ctc0, ctc3], [v26, v43, v47, v48, v110, v138, v72], [v69, []], [ctc3], v70, false, v110, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:31:dot', stdlib.UInt_max, 3), v26, v43, v47, v48, v110, v138]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:31:dot', stdlib.UInt_max, 3), v26, v43, v47, v48, v110]);
      const [v76] = txn3.data;
      const v82 = txn3.time;
      const v75 = txn3.from;
      
      const v78 = v76[stdlib.checkedBigNumberify('./index.rsh:74:34:array ref', stdlib.UInt_max, 0)];
      sim_r.txns.push({
        amt: v78,
        kind: 'to',
        tok: undefined
        });
      
      
      
      sim_r.txns.push({
        amt: v47,
        kind: 'from',
        to: v48,
        tok: undefined
        });
      const v106 = v76[stdlib.checkedBigNumberify('./index.rsh:88:61:array ref', stdlib.UInt_max, 1)];
      const cv46 = true;
      const cv47 = v78;
      const cv48 = v106;
      const cv138 = v82;
      const cv139 = v138;
      
      (() => {
        const v46 = cv46;
        const v47 = cv47;
        const v48 = cv48;
        const v138 = cv138;
        const v139 = cv139;
        
        if ((() => {
          const v53 = stdlib.gt(v43, v139);
          const v55 = v53 ? v46 : false;
          
          return v55;})()) {
          const v110 = stdlib.sub(v43, v139);
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v43, v47, v48, v110, v138]);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v43, v47, v48, v110]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v47, v138]);
          sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v47]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }})();
      return sim_r;
      })));
    if (txn3.didTimeout) {
      
      const txn4 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('./index.rsh:93:35:dot', stdlib.UInt_max, 5), [ctc1, ctc0, ctc0, ctc1, ctc0, ctc0], [v26, v43, v47, v48, v110, v138], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:93:35:dot', stdlib.UInt_max, 3), v26, v43, v47, v48, v110, v138]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:93:35:dot', stdlib.UInt_max, 3), v26, v43, v47, v48, v110]);
        const [] = txn4.data;
        const v115 = txn4.time;
        const v113 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv46 = false;
        const cv47 = v47;
        const cv48 = v48;
        const cv138 = v115;
        const cv139 = v138;
        
        (() => {
          const v46 = cv46;
          const v47 = cv47;
          const v48 = cv48;
          const v138 = cv138;
          const v139 = cv139;
          
          if ((() => {
            const v53 = stdlib.gt(v43, v139);
            const v55 = v53 ? v46 : false;
            
            return v55;})()) {
            const v110 = stdlib.sub(v43, v139);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v43, v47, v48, v110, v138]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 3), v26, v43, v47, v48, v110]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:56:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v47, v138]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v47]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:98:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();
        return sim_r;
        })));
      const [] = txn4.data;
      const v115 = txn4.time;
      const v113 = txn4.from;
      ;
      const cv46 = false;
      const cv47 = v47;
      const cv48 = v48;
      const cv138 = v115;
      const cv139 = v138;
      
      v46 = cv46;
      v47 = cv47;
      v48 = cv48;
      v138 = cv138;
      v139 = cv139;
      
      continue;
      }
    else {
      const [v76] = txn3.data;
      const v82 = txn3.time;
      const v75 = txn3.from;
      const v78 = v76[stdlib.checkedBigNumberify('./index.rsh:74:34:array ref', stdlib.UInt_max, 0)];
      ;
      const v88 = v76[stdlib.checkedBigNumberify('./index.rsh:81:63:array ref', stdlib.UInt_max, 1)];
      stdlib.protect(ctc4, await interact.placedBid(v88, v78), {
        at: './index.rsh:81:58:application',
        fs: ['at ./index.rsh:81:33:application call to [unknown function] (defined at: ./index.rsh:81:37:function exp)', 'at ./index.rsh:56:31:application call to [unknown function] (defined at: ./index.rsh:56:31:function exp)'],
        msg: 'placedBid',
        who: 'Bid'
        });
      
      stdlib.protect(ctc4, await interact.placedBid(v88, v78), {
        at: './index.rsh:84:47:application',
        fs: ['at ./index.rsh:83:29:application call to [unknown function] (defined at: ./index.rsh:83:45:function exp)', 'at ./index.rsh:56:31:application call to [unknown function] (defined at: ./index.rsh:56:31:function exp)'],
        msg: 'placedBid',
        who: 'Bid'
        });
      
      stdlib.protect(ctc4, await interact.placedBid(v88, v78), {
        at: './index.rsh:84:47:application',
        fs: ['at ./index.rsh:83:29:application call to [unknown function] (defined at: ./index.rsh:83:45:function exp)', 'at ./index.rsh:56:31:application call to [unknown function] (defined at: ./index.rsh:56:31:function exp)'],
        msg: 'placedBid',
        who: 'Bid'
        });
      
      ;
      const v106 = v76[stdlib.checkedBigNumberify('./index.rsh:88:61:array ref', stdlib.UInt_max, 1)];
      const cv46 = true;
      const cv47 = v78;
      const cv48 = v106;
      const cv138 = v82;
      const cv139 = v138;
      
      v46 = cv46;
      v47 = cv47;
      v48 = cv48;
      v138 = cv138;
      v139 = cv139;
      
      continue;}
    }
  const txn3 = await (ctc.recv(5, 1, [ctc1], false, false));
  const [v121] = txn3.data;
  const v124 = txn3.time;
  const v120 = txn3.from;
  ;
  const v123 = stdlib.addressEq(v26, v120);
  stdlib.assert(v123, {
    at: './index.rsh:101:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bid'
    });
  ;
  stdlib.protect(ctc4, await interact.auctionEnds(v48), {
    at: './index.rsh:37:41:application',
    fs: ['at ./index.rsh:36:21:application call to [unknown function] (defined at: ./index.rsh:36:37:function exp)', 'at ./index.rsh:103:24:application call to "auctionEnds" (defined at: ./index.rsh:35:49:function exp)'],
    msg: 'auctionEnds',
    who: 'Bid'
    });
  
  return;
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
gtxna 0 ApplicationArgs 2
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 9,
    size: 137
    }, {
    count: 10,
    size: 169
    }, null, null, {
    count: 9,
    size: 161
    }, {
    count: 12,
    size: 217
    }, {
    count: 11,
    size: 177
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:47:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 255
itob
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:52:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:52:17:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
gtxna 0 ApplicationArgs 5
btoi
load 254
+
dup
store 251
gtxna 0 ApplicationArgs 5
btoi
>
bz l0
load 251
gtxna 0 ApplicationArgs 5
btoi
-
store 250
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 251
itob
concat
load 253
itob
concat
load 252
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
l0:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 253
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:101:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:101:17:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
load 250
substring 0 8
btoi
store 249
// "CheckPay"
// "./index.rsh:56:31:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 249
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 252
==
assert
gtxn 4 Amount
load 253
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
load 254
gtxna 0 ApplicationArgs 5
btoi
>
bz l0
load 254
gtxna 0 ApplicationArgs 5
btoi
-
store 248
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 254
itob
concat
load 249
itob
concat
load 250
substring 8 40
concat
load 248
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 248
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
l0:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 251
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:93:35:dot"
// "[at ./index.rsh:56:31:application call to [unknown function] (defined at: ./index.rsh:56:31:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 254
gtxna 0 ApplicationArgs 5
btoi
>
!
int 0
&&
bz l0
load 254
gtxna 0 ApplicationArgs 5
btoi
-
store 250
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 250
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
l0:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 253
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 251
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v29",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v121",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  }
                ],
                "internalType": "struct T14",
                "name": "v76",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v29",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v121",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  }
                ],
                "internalType": "struct T14",
                "name": "v76",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610c2f806100826000396000f3fe60806040526004361061004e5760003560e01c806305d70dd11461005a578063415249d11461006f5780635c8047121461008257806361ff86f714610095578063a37b9299146100a857610055565b3661005557005b600080fd5b61006d61006836600461096f565b6100bb565b005b61006d61007d3660046109ad565b610225565b61006d61009036600461096f565b610363565b61006d6100a336600461099c565b610457565b61006d6100b636600461098a565b610582565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146100f857600080fd5b600080553460408201351461010c57600080fd5b7f4350d87bbf788b415584278d62a00aa323de66159331c694e8b7b548c4feda2c8160405161013b9190610b18565b60405180910390a16101876040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b33815260208083013590820152604080830135908201526101ae608083016060840161094e565b6001600160a01b03908116606083810191825243608080860191825260408051600160208083019190915288518816828401528801519481019490945286015190830152915190921660a08301525160c082015260e0015b60408051601f1981840301815291905280516020909101206000555050565b604051610239906001908390602001610b8c565b6040516020818303038152906040528051906020012060001c6000541461025f57600080fd5b60008055341561026e57600080fd5b3361027c602083018361094e565b6001600160a01b03161461028f57600080fd5b7f3e9b7138c9e45053669150929335c407048de530a34167c39b7c7972d610312a816040516102be9190610b48565b60405180910390a16102ce6108cd565b6102db602083018361094e565b81516001600160a01b0390911690526102fc60208301356080840135610bb4565b8151602090810191909152808201805160019052516040840135910152610329608083016060840161094e565b6020820180516001600160a01b039092166040909201919091528051436060909101525160808084013591015261035f816106c6565b5050565b604051610377906004908390602001610b78565b6040516020818303038152906040528051906020012060001c6000541461039d57600080fd5b6000805534156103ac57600080fd5b336103ba602083018361094e565b6001600160a01b0316146103cd57600080fd5b6103dd608082016060830161094e565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610418573d6000803e3d6000fd5b507fe0eb0f97768b7a3c076ad0eff27b59f9518c1a8f106f6b225a5826f60b175c90816040516104489190610a81565b60405180910390a16000805533ff5b60405161046b906003908390602001610ba0565b6040516020818303038152906040528051906020012060001c6000541461049157600080fd5b600080556104a7608082013560a0830135610bb4565b4310156104b357600080fd5b34156104be57600080fd5b7fcc997a9af4abe95cf593cbeb34368171b4d5923d8562b1e54e51006451978b7c816040516104ed9190610ae8565b60405180910390a16104fd6108cd565b61050a602083018361094e565b81516001600160a01b03909116905280516020808401359181019190915280820180516000905251604084013591015261054a608083016060840161094e565b6020820180516001600160a01b039092166040909201919091528051436060909101525160a083013560809091015261035f816106c6565b604051610596906003908390602001610ba0565b6040516020818303038152906040528051906020012060001c600054146105bc57600080fd5b600080556105d2608082013560a0830135610bb4565b43106105dd57600080fd5b3460c0820135146105ed57600080fd5b6105fd608082016060830161094e565b604080516001600160a01b0392909216919083013580156108fc02916000818181858888f19350505050158015610638573d6000803e3d6000fd5b507f0a7af253fcb9a735929ffc0024baf5e4ed932d53f9909d4c1e93d6d9e848828e816040516106689190610aaf565b60405180910390a16106786108cd565b610685602083018361094e565b81516001600160a01b0390911690528051602080840135918101919091528082018051600190525160c084013591015261054a610100830160e0840161094e565b604080516020810190915260008152816020015160800151826000015160200151116106f35760006106fa565b6020820151515b156107ed5781602001516080015182600001516020015161071b9190610bcc565b81526040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b019889528d51516001600160a01b039081168c528e5189015188528e890180518a0151885280518e0151821686528e518452518601518a528c516003998101999099528b5181169c89019c909c529551938701939093529251928501929092529051909616908201529351918401919091525160e0830152906101000160408051601f1981840301815291905280516020909101206000555061035f565b6040805160a08101825260009181018281526060808301848152608084018581528385526020808601969096528751516001600160a01b031690935286850180519095015190529251909201519091526108468161084b565b505050565b610878604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401908152845160409081015181860190815281516004948101949094528551909416908301525160608201529051608082015260a001610206565b604080516080810182526000918101828152606082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b80356001600160a01b038116811461093257600080fd5b919050565b600060808284031215610948578081fd5b50919050565b60006020828403121561095f578081fd5b6109688261091b565b9392505050565b600060808284031215610980578081fd5b6109688383610937565b60006101008284031215610948578081fd5b600060e08284031215610948578081fd5b600060c08284031215610948578081fd5b6001600160a01b036109cf8261091b565b16825260208181013590830152604090810135910152565b6001600160a01b03806109f98361091b565b168352602082013560208401526040820135604084015280610a1d6060840161091b565b16606084015250608090810135910152565b6001600160a01b0380610a418361091b565b168352602082013560208401526040820135604084015280610a656060840161091b565b166060840152506080818101359083015260a090810135910152565b60808101610a8f82846109be565b6001600160a01b03610aa36060850161091b565b16606083015292915050565b6101008101610abe8284610a2f565b60c083810135908301526001600160a01b03610adc60e0850161091b565b1660e083015292915050565b60e08101610af68284610a2f565b60c0830135801515808214610b0a57600080fd5b8060c0850152505092915050565b813581526020808301359082015260408083013590820152608081016001600160a01b03610aa36060850161091b565b60c08101610b5682846109e7565b60a0830135801515808214610b6a57600080fd5b8060a0850152505092915050565b8281526080810161096860208301846109be565b82815260c0810161096860208301846109e7565b82815260e081016109686020830184610a2f565b60008219821115610bc757610bc7610be3565b500190565b600082821015610bde57610bde610be3565b500390565b634e487b7160e01b600052601160045260246000fdfea264697066735822122013ebeaf8cd4ae0c388f3e5cd9c19b1d886775c8734014741e787f4088bb64ffa64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

