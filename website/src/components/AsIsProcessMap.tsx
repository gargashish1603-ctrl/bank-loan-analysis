import React, { useState } from 'react';
import { GitBranch } from 'lucide-react';
import { AS_IS_PROCESS_NODES } from '../data/baData';
import type { ProcessNodeDetail } from '../data/baData';

export const AsIsProcessMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ProcessNodeDetail>(AS_IS_PROCESS_NODES[2]); // Default on Document Validation bottleneck

  return (
    <section id="as-is-process" className="space-y-8">
      {/* Section Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest mb-2">
          <GitBranch className="w-4 h-4" />
          <span>Current-State BPMN Workflow</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              AS-IS Process Map & Bottleneck Dwell Time
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              8-swimlane manual origination process totaling <strong className="text-red-600">40.0 working hours (5.0 business days)</strong>, with 32.6 hours of non-value-add idle queue latency and a 35% document rework loop.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-red-100 text-red-800 border border-red-200 font-bold text-xs">
              Baseline: 100% Manual Underwriting
            </span>
          </div>
        </div>
      </div>

      {/* Interactive BPMN Swimlane Stepper Cards */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Click any process stage node to inspect operational details & friction points
          </div>
          <span className="text-[11px] text-slate-400">8 Swimlanes • 8 Core Milestones</span>
        </div>

        {/* Process Map Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {AS_IS_PROCESS_NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20 shadow-sm'
                    : node.isBottleneck
                    ? 'border-red-300 bg-red-50/30 hover:border-red-400'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/80'
                }`}
              >
                {node.isBottleneck && (
                  <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded bg-red-600 text-white font-bold text-[8px] uppercase tracking-wider shadow-xs">
                    Primary Bottleneck
                  </span>
                )}
                {node.isRework && (
                  <span className="absolute -top-2 left-2 px-1.5 py-0.5 rounded bg-amber-500 text-white font-bold text-[8px] uppercase tracking-wider shadow-xs">
                    35% Rework Loop
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                    <span>{node.stage}</span>
                    <span className="text-slate-600 font-semibold">{node.lane}</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900 leading-snug mb-1">{node.name}</h4>
                  <p className="text-[11px] text-slate-600 line-clamp-2">{node.painPoint}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px]">
                  <span className="text-slate-500">Latency:</span>
                  <span className={`font-bold ${node.isBottleneck ? 'text-red-600' : 'text-slate-700'}`}>
                    {node.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Process Node Deep-Dive Detail Panel */}
        <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-start justify-between border-b border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px]">
                  {selectedNode.id}
                </span>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Swimlane: {selectedNode.lane} • Owner: {selectedNode.owner}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{selectedNode.name}</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Stage Dwell Time</span>
              <span className="text-sm font-bold text-amber-400">{selectedNode.duration}</span>
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

            <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/60">
              <span className="text-[10px] font-bold text-red-400 uppercase block mb-1">Diagnosed Pain Point:</span>
              <span className="text-red-200 leading-relaxed block">{selectedNode.painPoint}</span>
            </div>

            <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-800/60">
              <span className="text-[10px] font-bold text-amber-400 uppercase block mb-1">Observed Operational Issue:</span>
              <span className="text-amber-200 leading-relaxed block">{selectedNode.observedIssue}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
