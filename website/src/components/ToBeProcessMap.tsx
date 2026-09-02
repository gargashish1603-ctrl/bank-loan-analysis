import React, { useState } from 'react';
import { GitMerge, Sparkles } from 'lucide-react';
import { TO_BE_PROCESS_NODES } from '../data/baData';
import type { ProcessNodeDetail } from '../data/baData';

export const ToBeProcessMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ProcessNodeDetail>(TO_BE_PROCESS_NODES[3]); // Default on Track A STP

  return (
    <section id="to-be-process" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">
          <GitMerge className="w-4 h-4" />
          <span>Future-State Target Operating Model</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              TO-BE Dual-Track Operating Model (38% STP + Exception Desk)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              Automation-first architecture reducing average TAT to <strong className="text-emerald-600">1.8 business days (-64%)</strong> by executing Straight-Through Processing on clean low-risk files while reserving licensed underwriters for edge cases.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Target: 1.8 Days Average TAT</span>
            </span>
          </div>
        </div>
      </div>

      {/* Dual-Track Visual Cards & Nodes */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Click any TO-BE stage node to inspect automation microservices & decision gates
          </div>
          <span className="text-[11px] text-slate-400">7 Optimized Stages</span>
        </div>

        {/* TO-BE Process Stage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TO_BE_PROCESS_NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/20 shadow-sm'
                    : node.isSTP
                    ? 'border-amber-300 bg-amber-50/40 hover:border-amber-400'
                    : node.isException
                    ? 'border-blue-300 bg-blue-50/40 hover:border-blue-400'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/80'
                }`}
              >
                {node.isSTP && (
                  <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded bg-amber-500 text-white font-bold text-[8px] uppercase tracking-wider shadow-xs">
                    ★ Track A (38% STP)
                  </span>
                )}
                {node.isException && (
                  <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded bg-blue-600 text-white font-bold text-[8px] uppercase tracking-wider shadow-xs">
                    Track B (Exception Desk)
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                    <span>{node.stage}</span>
                    <span className="text-slate-600 font-semibold">{node.lane}</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900 leading-snug mb-1">{node.name}</h4>
                  <p className="text-[11px] text-slate-600 line-clamp-2">{node.observedIssue}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px]">
                  <span className="text-slate-500">Execution Velocity:</span>
                  <span className="font-bold text-emerald-700">{node.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected TO-BE Process Node Detail Panel */}
        <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-start justify-between border-b border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">
                  {selectedNode.id}
                </span>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Swimlane: {selectedNode.lane} • Owner: {selectedNode.owner}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{selectedNode.name}</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Processing Velocity</span>
              <span className="text-sm font-bold text-emerald-400">{selectedNode.duration}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Input Received:</span>
              <span className="text-slate-200 leading-relaxed block">{selectedNode.input}</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Output Produced:</span>
              <span className="text-slate-200 leading-relaxed block">{selectedNode.output}</span>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60">
              <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">Automation Engine:</span>
              <span className="text-emerald-200 leading-relaxed block font-semibold">{selectedNode.automationType}</span>
            </div>

            <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/60">
              <span className="text-[10px] font-bold text-blue-400 uppercase block mb-1">Eliminated Bottleneck:</span>
              <span className="text-blue-200 leading-relaxed block">{selectedNode.painPoint}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
