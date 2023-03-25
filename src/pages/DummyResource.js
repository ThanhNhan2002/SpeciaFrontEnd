
import React from 'react'

export const dummyData = [
  {ABN: '111111111', clientName:'Company 1', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com','agent2@accounting1.com', 'agent3@accounting1.com']},
  {ABN: '111111112', clientName:'Company 2', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent2@accounting1.com', 'agent3@accounting1.com']},
  {ABN: '111111113', clientName:'Company 3', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent2@accounting1.com', 'agent3@accounting1.com']},
  {ABN: '111111114', clientName:'Company 4', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent2@accounting1.com', 'agent3@accounting1.com']},
  {ABN: '111111115', clientName:'Company 5', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent3@accounting1.com', 'agent3@accounting1.com']},
  {ABN: '111111116', clientName:'Company 6', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent3@accounting1.com']},

  {ABN: '111111117', clientName:'Company 7', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent4@accounting1.com']},
  {ABN: '111111118', clientName:'Company 8', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent1@accounting1.com', 'agent4@accounting1.com']},
  {ABN: '111111119', clientName:'Company 9', adminAccountantEmail:'admin@accounting1.com', taxAgentEmail: ['agent2@accounting1.com', 'agent4@accounting1.com']}
]

export const taxAgentEmails = [
  { Id: '1', email:'agent1@accounting1.com' },
  { Id: '2', email:'agent2@accounting1.com' },
  { Id: '3', email:'agent3@accounting1.com' },
  { Id: '4', email:'agent4@accounting1.com' },
  { Id: '5', email:'agent5@accounting1.com' },
  { Id: '6', email:'agent6@accounting1.com' },
];



export default function DummyResource() {



  return (
    <>
      <table id="my_table_id"
      data-url="data/url.json"
      data-id-field="id"
      data-editable-emptytext="Default empty text."
      data-editable-url="/my/editable/update/path">
        <thead>
          <tr>
            <th class="col-md-1" data-field="id" data-sortable="true" data-align="center">#</th>
            <th class="col-md-4" data-field="name" data-editable="true">Name</th>
            <th class="col-md-7" data-field="description" data-editable="true" data-editable-emptytext="Custom empty text.">Description</th>
          </tr>

        </thead>
        <tbody>
          <tr>
              <td>Text editable</td>
              <td>Text editable</td>
              <td>Text editable</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}


